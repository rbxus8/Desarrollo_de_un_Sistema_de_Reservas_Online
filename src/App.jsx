import "./index.css";
import React, { useState } from "react";
import Header from "./header.jsx";
import Login from "./login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [rol, setRol] = useState(null);

  const handleLogin = (rolSeleccionado) => {
    if (rolSeleccionado === "empleador") {
      setIsLoggedIn(true);
      setRol(rolSeleccionado);
    } else {
      alert("Acceso denegado. Solo empleadores pueden entrar.");
    }
  };

  const cerrarSesion = () => {
    setIsLoggedIn(false);
    setRol(null);
  };

  return (
    <BrowserRouter>
      <Header rol={rol} />
      <Routes>
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <div className="container">
                <h1>Bienvenido como {rol}</h1>
                <button className="btn" onClick={cerrarSesion}>Cerrar sesión</button>
              </div>
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
