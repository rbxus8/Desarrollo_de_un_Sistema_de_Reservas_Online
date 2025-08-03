import React from "react";
import Header from "./header.jsx";
import Footer from "./Footer.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Inicio from "./pages/Inicio.jsx";
import Contacto from "./pages/Contacto.jsx";
import Habitaciones from "./pages/Habitaciones.jsx";
import Servicios from "./pages/Servicios.jsx";
import Reservas from "./pages/Reservas.jsx";
import Galeria from "./pages/Galeria.jsx";

function Main() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Habitaciones" element={<Habitaciones />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/Reservas" element={<Reservas />} />
        <Route path="/Galeria" element={<Galeria />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Main;
