import { createSlice } from "@reduxjs/toolkit";
import { Invoice } from "../../../../data";
import { invoiceData } from "../../../../data";
import { RootState } from "../../../store";
import dayjs from "dayjs";
import { generateRandomID } from "../../../../utils";
interface InvoiceState {
  value: Invoice[];
}

const initialState: InvoiceState = {
  value: invoiceData,
};

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    addNewInvoice: (state, action) => {
      const newInvoice = action.payload;
      const randomID = generateRandomID();

      const total = action.payload.items.reduce(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (accumulator: number, currentValue: any) =>
          accumulator + Number(currentValue.total),
        0
      );
      let dueDateUpdated = dayjs(action.payload.createdAt, "YYYY-MM-DD");
      dueDateUpdated = dueDateUpdated.add(action.payload.paymentTerms, "day");
      state.value = [
        ...state.value,
        {
          ...newInvoice,
          id: randomID,
          paymentDue: dueDateUpdated.format("YYYY-MM-DD").toString(),
          total: total,
        },
      ];
    },
    updateInvoice: (state, action) => {
      const updatedInvoice = [...state.value];
      const total = action.payload.items.reduce(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (accumulator: number, currentValue: any) =>
          accumulator + Number(currentValue.total),
        0
      );

      let dueDateUpdated = dayjs(action.payload.createdAt, "YYYY-MM-DD");

      dueDateUpdated = dueDateUpdated.add(action.payload.paymentTerms, "day");

      const indexPositionOfUpdatedInvoice = updatedInvoice.findIndex(
        (eachInvoice) => eachInvoice.id === action.payload.id
      );
      updatedInvoice[indexPositionOfUpdatedInvoice] = {
        ...action.payload,
        paymentDue: dueDateUpdated.format("YYYY-MM-DD").toString(),
        total: total,
      };

      state.value = updatedInvoice;
    },
    filter: (state, action) => {
      if (action.payload.filter.length === 0) {
        state.value = action.payload.prevStateRef.current;
        return;
      }
      state.value = action.payload.prevStateRef.current.filter(
        (invoice: Invoice) => action.payload.filter.includes(invoice.status)
      );
    },
    delete: (state, action) => {
      state.value = state.value.filter(
        (invoice) => invoice.id !== action.payload
      );
    },
  },
});

export const { updateInvoice } = invoiceSlice.actions;

export const selectInvoice = (state: RootState) => state.invoice.value;

export default invoiceSlice.reducer;
