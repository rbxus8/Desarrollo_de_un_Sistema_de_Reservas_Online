import React from "react";
import Iniciosesion from "./iniciosesion.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Login() {
  return (
    <>
      <header className="h-25 border w-full flex items-center justify-between p-5">
        <a href="/">
          <h1 className="font-serif text-3xl">GranDestino</h1>
        </a>
      </header>
      <main className="bg-black w-full h-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Iniciosesion />} />
        </Routes>
      </main>
      <footer className="h-20 border w-full flex items-center justify-center">
        <p className="text-center">© 2023 GranDestino. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Login;
