import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { DefaultLocalizationProvider, hclTheme } from "./index";
import AllMaterialUIComponents from "./components/all-components";
import React from "react";

function App() {
  return (
    <DefaultLocalizationProvider>
      <ThemeProvider theme={hclTheme}>
        <CssBaseline />
        <AllMaterialUIComponents />
      </ThemeProvider>
    </DefaultLocalizationProvider>
  );
}

export default App;
