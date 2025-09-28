import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@assets/styles/globals.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "@navigation/AppRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#6D307C" },
    background: { default: "#FFFFFF" },
    text: { primary: "#363636" },
  },
  typography: {
    fontFamily:
      '"Brand Primary", system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontFamily:
        '"Brand Highlight", system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    h2: {
      fontFamily:
        '"Brand Highlight", system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    h3: {
      fontFamily:
        '"Brand Highlight", system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    h4: {
      fontFamily:
        '"Brand Highlight", system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    h5: {
      fontFamily:
        '"Brand Highlight", system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    h6: {
      fontFamily:
        '"Brand Highlight", system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, sans-serif',
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
