import postgres from "postgres";
import { invoiceData, Item } from "../../data";
import { randomInt, randomUUID } from "crypto";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

async function seedUsers() {
  // make sure uuid-ossp is available
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  // create the table with correct DEFAULT syntax
  await sql`
      CREATE TABLE IF NOT EXISTS users (
        id         UUID    PRIMARY KEY DEFAULT uuid_generate_v4(),
        username   VARCHAR(50)  NOT NULL,
        email      VARCHAR(255) NOT NULL,
        role       VARCHAR(20)  NOT NULL DEFAULT 'user',
        street     VARCHAR(255) NOT NULL,
        city       VARCHAR(100) NOT NULL,
        post_code  VARCHAR(20)  NOT NULL,
        country    VARCHAR(100) NOT NULL
      );
    `;
  // example seed row — adjust the values to whatever you need
  await sql`
      INSERT INTO users (
        username, email, role,
        street, city, post_code, country
      ) VALUES (
        'alice', 'alice@example.com', 'user',
        '123 Main St', 'London', 'SW1A 1AA', 'UK'
      );
    `;
}

function makeInvoiceNumber(prefix = "RT"): string {
  const num = randomInt(0, 10000) // 0–9999
    .toString()
    .padStart(4, "0"); // e.g. "0380", "4823"
  return `${prefix}${num}`; // e.g. "RT0380"
}

async function seedInvoices() {
  await sql`
  CREATE TABLE IF NOT EXISTS invoices (
    invoice_id VARCHAR(20) PRIMARY KEY NOT NULL,
    client_name    VARCHAR(20) NOT NULL,
    client_email  VARCHAR(255) NOT NULL,
    created_at     DATE,
    payment_due    DATE,
    description    TEXT,
    payment_terms  INT       NOT NULL,
    status         VARCHAR(255) NOT NULL
  );`;

  for (const invoice of invoiceData) {
    const invoiceNumber = makeInvoiceNumber();
    await sql`
      INSERT INTO invoices (
        invoice_id,
        client_name,
        client_email,
        created_at,
        payment_due,
        description,
        payment_terms,
        status
      ) VALUES (
        ${invoiceNumber},
        ${invoice.clientName},
        ${invoice.clientEmail},
        ${invoice.createdAt},
        ${invoice.paymentDue},
        ${invoice.description},
        ${invoice.paymentTerms},
        ${invoice.status}
      );
    `;

    seedItems(invoice.items, invoiceNumber);
  }
}

async function CreateItems() {
  await sql`
    CREATE TABLE IF NOT EXISTS items (
        id UUID    PRIMARY KEY DEFAULT uuid_generate_v4(),
        invoice_id VARCHAR(20),
        name VARCHAR(40) NOT NULL,
        quantity INT NOT NULL,
        price VARCHAR(10) NOT NULL,
        CONSTRAINT fk_invoice
            FOREIGN KEY(invoice_id)
              REFERENCES invoices(invoice_id)
    );`;
}

async function seedItems(items: Item[], invoiceNumber: string) {
  for (const item of items) {
    await sql`
        INSERT INTO items (
            id, invoice_id, name, quantity, price
        ) VALUES (
            ${randomUUID()},
            ${invoiceNumber},
            ${item.name},
            ${item.quantity},
            ${item.price}
        );
    `;
  }
}

export async function GET() {
  try {
    await sql.begin((sql) => {
      CreateItems(), seedInvoices();
    });
    return Response.json({ message: "Database seeded successfully!" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
