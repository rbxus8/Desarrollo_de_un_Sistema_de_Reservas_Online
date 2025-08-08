import React from "react";

function Registrarse() {
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
          <form action="" className="flex flex-col items-center w-full">
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Nombre"
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Correo Electrónico"
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="tel"
              name="telefono"
              id="telefono"
              placeholder="Teléfono"
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Contraseña"
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="password"
              name="password_confirmar"
              id="password_confirmar"
              placeholder="Confirmar Contraseña"
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="button"
              value="Registrarse"
              className="w-50 bg-blue-500 text-white p-2 rounded mb-1 cursor-pointer"
            />
          </form>
        </div>
      </main>
      <footer className="h-20 border w-full flex items-center justify-center">
        <p className="text-center">
          © 2023 GranDestino. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Registrarse;
