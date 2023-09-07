import { configureStore } from "@reduxjs/toolkit";
import { invoiceSlice } from "./Homepage/features/InvoicesDetail/InvoiceDetailSlice";

export const store = configureStore({
  reducer: {
    invoice: invoiceSlice.reducer,
  },
});

export type AppdDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
