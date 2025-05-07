// app/ClientThemeProvider.tsx (client component)
"use client";

import { ThemeProvider, createTheme } from "@mui/material";
import { useMemo } from "react";
import { getDesignTokens } from "./theme";
import { useAppSelector } from "@/store/hooks";

export default function ClientThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lightOrDarkMode = useAppSelector(
    (state) => state.darkOrLightMode.value
  );

  const theme = useMemo(
    () => createTheme(getDesignTokens(lightOrDarkMode)),
    [lightOrDarkMode]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
