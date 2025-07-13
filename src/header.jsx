import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header({ rol }) {
  const location = useLocation();
  const path = location.pathname;

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Hotel'Julis Admin</h1>

      <nav>
        <ul style={styles.navList}>
          {/* Página de login: mostrar solo ayuda */}
          {path === "/login" ? (
            <li>
              <Link to="/ayuda" style={styles.link}>¿Necesitas ayuda?</Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/" style={styles.link}>Inicio</Link>
              </li>
              {rol === "empleador" && (
                <>
                  <li><Link to="/perfil" style={styles.link}>Perfil</Link></li>
                  <li><Link to="/servicios" style={styles.link}>Servicios</Link></li>
                  <li><Link to="/reservas" style={styles.link}>Reservas</Link></li>
                </>
              )}
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#dd00ff09",
    color: "white",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    margin: 0,
    fontSize: "1.5rem",
  },
  navList: {
    display: "flex",
    gap: "1rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.2s ease",
  },
};

export default Header;
