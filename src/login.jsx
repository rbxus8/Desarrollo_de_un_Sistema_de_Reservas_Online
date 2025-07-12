import React, { useState } from "react";
import Header from "./Header"; //

function Login({ onLogin }) {
  const [rolSeleccionado, setRolSeleccionado] = useState("empleador");
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes poner una validación más real si deseas
    if (usuario.trim() === "" || clave.trim() === "") {
      alert("Por favor completa todos los campos");
      return;
    }

    // Solo permitimos ingreso a "empleador"
    if (rolSeleccionado === "empleador") {
      onLogin(rolSeleccionado); // Avanza a la app
    } else {
      alert("Acceso denegado. Solo empleadores pueden ingresar.");
    }
  };

  return (
    <>
      <Header />
      <main className="main_login">
        <h2>Iniciar Sesión</h2>
        <form className="main_form" onSubmit={manejarSubmit}>
          <div>
            <input
              type="text"
              placeholder="Usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Contraseña"
              value={clave}
              onChange={(e) => setClave(e.target.value)}
            />
          </div>
          <div>
            <select
              value={rolSeleccionado}
              onChange={(e) => setRolSeleccionado(e.target.value)}
            >
              <option value="empleador">Empleador</option>
              <option value="cliente">Cliente</option>
              <option value="admin">Administrador</option>
            </select>
          </div>
          <button className="btn" type="submit">
            Ingresar
          </button>
        </form>
      </main>
    </>
  );
}

export default Login;
