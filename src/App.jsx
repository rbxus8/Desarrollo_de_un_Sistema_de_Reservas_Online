import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import User from "./User.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/Desarrollo_de_un_Sistema_de_Reservas_Online">
      <User />
    </BrowserRouter>
  </React.StrictMode>
);
