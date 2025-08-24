import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const AdminDashboard = () => {
  const porcentaje = 65;
  return (
    <>
      <section>
        <h1>Bienvenido al panel de administración</h1>
        <article>
          <h4>Habitaciones Ocupadas</h4>
          <div style={{ width: 150, height: 150 }}>
            <CircularProgressbar
              value={porcentaje}
              text={`${porcentaje}%`}
              styles={buildStyles({
                textColor: "#000",
                pathColor: "#00bfff",
                trailColor: "#eee",
              })}
            />
          </div>
        </article>
        <article>
          <h4>Habitaciones Libres</h4>
        </article>
        <article>
          <h4>Reservas Pendientes</h4>
        </article>
        <article>
          <h4>Usuarios Registrados</h4>
        </article>
      </section>
    </>
  );
};

export default AdminDashboard;
