import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { DefaultLocalizationProvider, hclTheme } from "./index";
import AllMaterialUIComponents from "./components/all-components";
import React from "react";
import "@fontsource/lato";

function App() {
  return (
    <ThemeProvider theme={hclTheme}>
      <DefaultLocalizationProvider>
        <CssBaseline />
        <AllMaterialUIComponents />
      </DefaultLocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
