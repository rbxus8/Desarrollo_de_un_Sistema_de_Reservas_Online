import { Link } from 'react-router-dom'
import './style.css'

function Header() {
  return (
    <header>
      <div>
        <h1 className='tit_header'>GranDestino</h1>

        <div className='config'>
          {/* Selector de idioma */}
          <select name="idiomas" id="idiomas">
            <option value="esp">Español</option>
            <option value="ing">Inglés</option>
            <option value="jap">Japonés</option>
          </select>

          {/* Selector de cuenta (puedes convertir en botón más adelante) */}
          <select name="usuario" id="usuario">
            <option value="login">Iniciar Sesión</option>
            <option value="perfil">Mi cuenta</option>
            <option value="salir">Cerrar Sesión</option>
          </select>
        </div>

        {/* Menú de navegación */}
        <nav className="navbar">
          <Link className="nav-link" to="/">Inicio</Link>
          <Link className="nav-link" to="/habitaciones">Habitaciones</Link>
          <Link className="nav-link" to="/servicios">Servicios</Link>
          <Link className="nav-link" to="/reservas">Reservas</Link>
          <Link className="nav-link" to="/galeria">Galería</Link>
          <Link className="nav-link" to="/contacto">Contacto</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header;
