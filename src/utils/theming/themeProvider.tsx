import React from "react";
import { AppState } from "../../store/reducers";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import themes from "./index";

export default function MyThemeProvider(props: { children: React.ReactNode }) {
  const currentTheme = useSelector((state: AppState) => state.preferences.theme);

  return <ThemeProvider theme={themes[currentTheme]}>{props.children}</ThemeProvider>;
}
