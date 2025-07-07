import './index.css';
import React, { useState } from 'react';
import Header from './header.jsx';
import Login from './login.jsx'; // Debes crear este componente

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [rol, setRol] = useState(null);

  const handleLogin = (rolSeleccionado) => {
    if (rolSeleccionado === 'empleador') {
      setIsLoggedIn(true);
      setRol(rolSeleccionado);
    } else {
      alert('Acceso denegado. Solo empleadores pueden entrar.');
    }
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <>
      <Header />
      <div className='container'>
        <h1>Bienvenido a mi aplicación como {rol}</h1>
        <MyButton />
      </div>
    </>
  );
}

function MyButton() {
  return (
    <button>
      Soy un botón
    </button>
  );
}

export default App;
