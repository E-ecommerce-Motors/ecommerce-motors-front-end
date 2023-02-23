import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MyThemeProvider } from "./styles/MyThemeProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <MyThemeProvider>
        <App />
      </MyThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
