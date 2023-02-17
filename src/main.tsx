import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./pages/Button";
import { Card } from "./pages/Card";
import { CardAuction } from "./pages/CardAuction";
import { MyThemeProvider } from "./styles/MyThemeProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MyThemeProvider>
      {/* <Card />
      <Button /> */}
      <CardAuction />
    </MyThemeProvider>
  </React.StrictMode>
);
