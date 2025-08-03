import React from "react";

function Login() {
  return (
    <>
      <header className="h-25 border w-full flex items-center justify-between p-5">
        <a href="/">
          <h1 className="font-serif text-3xl">GranDestino</h1>
        </a>
      </header>
      <main className="bg-black w-full h-screen flex items-center justify-center">
        <div className="bg-white p-10 rounded shadow-lg w-130 text-start">
          <h4 className=" mb-2">Ingrese sus datos para acceder a su cuenta</h4>
          <h2 className="text-4xl mb-20">Iniciar Sesión</h2>
          <form action="" className="flex flex-col ">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Correo Electrónico"
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Contraseña"
              className="border p-2 rounded w-full mb-4"
            />
            <h5 className="text-end mb-15">
              <a href="" className="text-blue-500">
                Recuperar Contraseña
              </a>
            </h5>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded mb-1"
            >
              Iniciar Sesión
            </button>
            <button className="bg-red-500 text-white p-2 rounded">
              Google
            </button>
            <h3 className="text-center mt-4">
              ¿No tienes una cuenta?{" "}
              <a href="" className="text-blue-500">
                Regístrate aquí
              </a>
            </h3>
          </form>
        </div>
      </main>
      <footer className="h-20 border w-full flex items-center justify-center">
        <p className="text-center">© 2023 GranDestino. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Login;
