import { configureStore } from "@reduxjs/toolkit";
import { invoiceSlice } from "./Homepage/features/InvoicesDetail/InvoiceDetailSlice";
import { darkOrLightModeSlice } from "./Homepage/features/DarkOrLightMode/DarkOrLightModeSlice";

export const store = configureStore({
  reducer: {
    invoice: invoiceSlice.reducer,
    darkOrLightMode: darkOrLightModeSlice.reducer,
  },
});

export type AppdDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
