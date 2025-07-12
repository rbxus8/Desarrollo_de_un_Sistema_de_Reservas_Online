import "./index.css";
import React, { useState } from "react";
import Header from "./header.jsx";
import Login from "./login.jsx";

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

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <>
      <header rol={rol} />
      <div className="container">
        <h1>Bienvenido a mi aplicación como {rol}</h1>
        <MyButton />
        <button className="btn" onClick={cerrarSesion}>Cerrar sesión</button>
      </div>
    </>
  );
}

function MyButton() {
  return <button className="btn">Soy un botón</button>;
}

export default App;
