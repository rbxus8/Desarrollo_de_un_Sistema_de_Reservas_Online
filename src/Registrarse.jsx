import React, { useState } from "react";

function Registrarse() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    password: "",
  });

  const [mensaje, setMensaje] = useState("");

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Manejar el envío
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost/registro.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.error) {
        setMensaje(`❌ ${data.error}`);
      } else {
        setMensaje(`✅ ${data.mensaje}`);
      }
    } catch (err) {
      setMensaje(`❌ Error de conexión: ${err.message}`);
    }
  };

  return (
    <>
      <header className="h-25 border w-full flex items-center justify-between p-5">
        <a href="/">
          <h1 className="font-serif text-3xl">GranDestino</h1>
        </a>
      </header>

      <main className="bg-black w-full h-screen flex items-center justify-center">
        <div className="bg-white p-10 rounded shadow-lg w-130 text-start flex flex-col items-center">
          <h4>Ingrese los siguientes datos</h4>
          <h1 className="text-4xl mb-20">Registrarse</h1>

          <form
            className="flex flex-col items-center w-full"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              className="border p-2 rounded w-full mb-4"
              value={formData.nombre}
              onChange={handleChange}
            />
            <input
              type="text"
              name="apellido"
              placeholder="Apellido"
              className="border p-2 rounded w-full mb-4"
              value={formData.apellido}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              className="border p-2 rounded w-full mb-4"
              value={formData.telefono}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              className="border p-2 rounded w-full mb-4"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              className="border p-2 rounded w-full mb-4"
              value={formData.password}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="w-50 bg-blue-500 text-white p-2 rounded mb-1 cursor-pointer"
            >
              Registrarse
            </button>
          </form>

          {mensaje && <p className="mt-4">{mensaje}</p>}
        </div>
      </main>

      <footer className="h-20 border w-full flex items-center justify-center">
        <p className="text-center">© 2023 GranDestino. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Registrarse;
