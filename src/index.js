import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./subcomponents/Navbar";
import { ThemeProvider } from "styled-components";
import { theme } from "./globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Navbar />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
