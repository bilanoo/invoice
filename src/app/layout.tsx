"use client";

import "./globals.css";
import { Provider } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { store } from "@/store/store";

import ClientThemeProvider from "@/theme/ClientThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ClientThemeProvider>{children}</ClientThemeProvider>
          </LocalizationProvider>
        </Provider>
      </body>
    </html>
  );
}
