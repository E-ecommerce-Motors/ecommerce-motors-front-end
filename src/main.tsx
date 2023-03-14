import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MyThemeProvider } from "./styles/MyThemeProvider";
import { UpdateProvider } from "./shared/providers/authProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <MyThemeProvider>
        <UpdateProvider>
          <App />
        </UpdateProvider>
      </MyThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
