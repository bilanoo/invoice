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
  },
});

export const { updateInvoice } = invoiceSlice.actions;

export const selectInvoice = (state: RootState) => state.invoice.value;

export default invoiceSlice.reducer;
