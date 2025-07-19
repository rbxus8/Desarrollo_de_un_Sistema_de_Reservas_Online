import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <header className="bg-pink-500 grid grid-cols-[1fr_2fr] grid-rows-1 p-5 items-center">
      <a href="#">
        <h1 className="font-serif text-3xl">GranDestino</h1>
      </a>
      <div className="text-end">
        <div className="config">
          {/* Selector de idioma */}
          <select name="idiomas" id="idiomas">
            <option value="esp">Español</option>
            <option value="ing">Inglés</option>
            <option value="jap">Japonés</option>
          </select>
        </div>
        {/* Menú de navegación */}
        <nav className="flex gap-4 justify-end">
          <Link className="nav-link" to="/Inicio">
            Inicio
          </Link>
          <Link className="nav-link" to="/habitaciones">
            Habitaciones
          </Link>
          <Link className="nav-link" to="/servicios">
            Servicios
          </Link>
          <Link className="nav-link" to="/reservas">
            Reservas
          </Link>
          <Link className="nav-link" to="/galeria">
            Galería
          </Link>
          <Link className="nav-link" to="/contacto">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
