import React, { useState } from "react";
import Header from "./header"; // ✅ Asegúrate que la ruta sea correcta

function Login({ onLogin }) {
  const [rolSeleccionado, setRolSeleccionado] = useState("empleador");
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();

    if (usuario.trim() === "" || clave.trim() === "") {
      alert("Por favor completa todos los campos");
      return;
    }

    if (rolSeleccionado === "empleador") {
      onLogin(rolSeleccionado);
    } else {
      alert("Acceso denegado. Solo empleadores pueden ingresar.");
    }
  };

  return (
    <>
      <main className="main_login">
        <form className="main_form" onSubmit={manejarSubmit}>
          <h2 style={{ marginBottom: "1rem" }}>Iniciar Sesión</h2>
          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
          />
          <select
            value={rolSeleccionado}
            onChange={(e) => setRolSeleccionado(e.target.value)}
          >
            <option value="empleador">Empleador</option>
            <option value="cliente">Cliente</option>
            <option value="admin">Administrador</option>
          </select>
          <button className="btn" type="submit">
            Ingresar
          </button>
        </form>
      </main>
    </>
  );
}

export default Login;
