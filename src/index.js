import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./subcomponents/Navbar";
import { ThemeProvider } from "styled-components";
import { theme, sm } from "./globalStyles";
import Footer from "./subcomponents/Footer";
import NavbarMobile from "./subcomponents/NavbarMobile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {sm ? <NavbarMobile /> : <Navbar />}
        <App />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
