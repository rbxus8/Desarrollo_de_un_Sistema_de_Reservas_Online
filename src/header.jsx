import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <header className="h-28">
      <div className="bg-white border z-100 fixed w-full h-28 grid grid-cols-[1fr_2fr] grid-rows-1 p-5 items-center">
        <a href="#">
          <h1 className="font-serif text-3xl ">GranDestino</h1>
        </a>
        <div className="text-end gap-4 flex flex-col">
          <div className="flex justify-end gap-4">
            {/* Selector de Cuenta*/}
            <Link
              className="border cursor-pointer p-1 hover:bg-gray-200"
              name="usuario"
              id="usuarios"
              to="/Login"
            >
              Iniciar Sesion
            </Link>
            {/* Selector de idioma */}
            <select
              className="border cursor-pointer"
              name="idiomas"
              id="idiomas"
            >
              <option value="esp">Español</option>
              <option value="ing">Inglés</option>
              <option value="jap">Japonés</option>
            </select>
          </div>
          {/* Menú de navegación */}
          <nav className="flex gap-4 justify-end">
            <Link
              className="hover:outline-2 outline-offset-1 hover:text-black-50 p-1"
              to="/Inicio"
            >
              Inicio
            </Link>
            <Link
              className="hover:outline-2 outline-offset-1 hover:text-black-50 p-1"
              to="/habitaciones"
            >
              Habitaciones
            </Link>
            <Link
              className="hover:outline-2 outline-offset-1 hover:text-black-50 p-1"
              to="/Servicios"
            >
              Servicios
            </Link>
            <Link
              className="hover:outline-2 outline-offset-1 hover:text-black-50 p-1"
              to="/Reservas"
            >
              Reservas
            </Link>
            <Link
              className="hover:outline-2 outline-offset-1 hover:text-black-50 p-1"
              to="/Galeria"
            >
              Galería
            </Link>
            <Link
              className="hover:outline-2 outline-offset-1 hover:text-black-50 p-1"
              to="/contacto"
            >
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
