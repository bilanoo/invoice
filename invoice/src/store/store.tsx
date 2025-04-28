"use client";
import { configureStore } from "@reduxjs/toolkit";
import { invoiceSlice } from "./InvoiceDetailSlice";
import { darkOrLightModeSlice } from "./DarkOrLightModeSlice";

export const store = configureStore({
  reducer: {
    invoice: invoiceSlice.reducer,
    darkOrLightMode: darkOrLightModeSlice.reducer,
  },
});

export type AppdDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
