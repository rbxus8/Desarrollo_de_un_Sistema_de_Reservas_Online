import React, { useState } from "react";

function Header() {
  // Estado para identificar qué link está siendo "hovered"
  const [hoveredLink, setHoveredLink] = useState(null);

  const navLinks = ["Inicio", "Reservas", "Habitaciones", "Clientes"];

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Hotel'Julis Admin</h1>
      <nav style={styles.nav}>
        {navLinks.map((text, index) => (
          <a
            key={index}
            href="#"
            onMouseEnter={() => setHoveredLink(index)}
            onMouseLeave={() => setHoveredLink(null)}
            style={{
              ...styles.link,
              color: hoveredLink === index ? "#ffcc00" : "white",
            }}
          >
            {text}
          </a>
        ))}
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#004080",
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
  nav: {
    display: "flex",
    gap: "1rem",
  },
  link: {
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.2s ease",
  },
};

export default Header;
