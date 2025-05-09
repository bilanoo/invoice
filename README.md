# Invoice app

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [The project](#the-project)
  - [Expected behaviour](#expected-behaviour)
  - [Links](#links)
- [Built with](#built-with)
- [Continued development](#continued-development)

### Screenshot

![Design preview for the Invoice app coding challenge](./preview.jpg)

### The Project

Your users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete invoices
- Receive form validations when trying to create/edit an invoice
- Save draft invoices, and mark pending invoices as paid
- Filter invoices by status (draft/pending/paid)
- Toggle light and dark mode

### Expected Behaviour

- Creating an invoice
  - When creating a new invoice, an ID needs to be created. Each ID should be 2 random uppercased letters followed by 4 random numbers.
  - Invoices can be created either as drafts or as pending. Clicking "Save as Draft" should allow the user to leave any form field blank, but should create an ID if one doesn't exist and set the status to "draft". Clicking "Save & Send" should require all forms fields to be filled in, and should set the status to "pending".
  - Changing the Payments Terms field should set the `paymentDue` property based on the `createdAt` date plus the numbers of days set for the payment terms.
  - The `total` should be the sum of all items on the invoice.
- Editing an invoice
  - When saving changes to an invoice, all fields are required when the "Save Changes" button is clicked. If the user clicks "Cancel", any unsaved changes should be reset.
  - If the invoice being edited is a "draft", the status needs to be updated to "pending" when the "Save Changes" button is clicked. All fields are required at this stage.
- Users should be able to mark invoices as paid by clicking the "Mark as Paid" button. This should change the invoice's status to "paid".
- Users should receive a confirmation modal when trying to delete invoices.

### Links

- Solution URL: [Github](https://github.com/bilanoo/invoice)
- Live Site URL: [Invoice App](invoice-wine-five.vercel.app)

### Built with

- [NextJS](https://nextjs.org/) - JS Framework
- [React](https://reactjs.org/) - JS Library
- Typescript
- CSS
- Flexbox
- [Material UI](https://mui.com/material-ui/getting-started/) - Material UI is a library of React UI components that implements Google's Material Design.
- [Redux](https://redux.js.org/) - A Predictable State Container for JS Apps

### Continued development

Add additional features like accounts, login, store data into local storage so any changes are not lost upon refreshing the page. Also, adding a backend to the app.
