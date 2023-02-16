import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./pages/app";
import { MyThemeProvider } from "./styles/MyThemeProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MyThemeProvider>
      <App />
    </MyThemeProvider>
  </React.StrictMode>
);
