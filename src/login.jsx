import React, { useState } from 'react';

function Login({ onLogin }) {
  const [rolSeleccionado, setRolSeleccionado] = useState('empleador');
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');

  const manejarSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes poner una validación más real si deseas
    if (usuario.trim() === '' || clave.trim() === '') {
      alert('Por favor completa todos los campos');
      return;
    }

    // Solo permitimos ingreso a "empleador"
    if (rolSeleccionado === 'empleador') {
      onLogin(rolSeleccionado); // Avanza a la app
    } else {
      alert('Acceso denegado. Solo empleadores pueden ingresar.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '5rem auto', textAlign: 'center' }}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={manejarSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <input
            type="password"
            placeholder="Contraseña"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <select
            value={rolSeleccionado}
            onChange={(e) => setRolSeleccionado(e.target.value)}
            style={{ width: '100%', padding: '0.5rem' }}
          >
            <option value="empleador">Empleador</option>
            <option value="cliente">Cliente</option>
            <option value="admin">Administrador</option>
          </select>
        </div>
        <button type="submit" style={{ padding: '0.5rem 1.5rem' }}>
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default Login;
