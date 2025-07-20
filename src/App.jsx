import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header.jsx";
import Footer from "./Footer.jsx";

import Inicio from "./pages/Inicio.jsx";
import Contacto from "./pages/Contacto.jsx";
import Habitaciones from "./pages/Habitaciones.jsx";
import Servicios from "./pages/Servicios.jsx";
import Reservas from "./pages/Reservas.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Habitaciones" element={<Habitaciones />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/Reservas" element={<Reservas />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
