import { createSlice } from "@reduxjs/toolkit";
import { Invoice } from "../../../../data";
import { invoiceData } from "../../../../data";
import { RootState } from "../../../store";
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
    updateInvoice: (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
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
