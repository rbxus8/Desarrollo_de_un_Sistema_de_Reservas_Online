import './index.css';
import React from 'react';
import Header from './header';



function App() {


  return (
    <div className='container'>
      <h1>Bienvenido a mi aplicación</h1>
      <MyButton />
    </div> 
  ) 
}

function MyButton() {
  return (
    <button>
      Soy un botón
    </button>
  );
}

export default App
