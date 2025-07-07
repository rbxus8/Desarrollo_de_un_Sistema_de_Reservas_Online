import './index.css';
import React from 'react';
import Header from './header.jsx';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <h1>Bienvenido a mi aplicación</h1>
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
