import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header.jsx";
import Footer from "./Footer.jsx";

import Inicio from "./pages/Inicio.jsx";
import Contacto from "./pages/Contacto.jsx";
import Habitaciones from "./pages/Habitaciones.jsx";
import Servicios from "./pages/Servicios.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/Habitaciones" element={<Habitaciones />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
