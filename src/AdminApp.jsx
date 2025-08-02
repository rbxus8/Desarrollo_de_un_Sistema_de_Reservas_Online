import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminDashboard from "./pagesAdmin/AdminDashboard.jsx";
import AdminUsuarios from "./pagesAdmin/AdminUsuarios.jsx";
import AdminReservas from "./pagesAdmin/AdminReservas.jsx";

function AdminApp() {
  return (
    <div>
      <h2>Panel de Administración</h2>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/usuarios" element={<AdminUsuarios />} />
        <Route path="/admin/reservas" element={<AdminReservas />} />
      </Routes>
    </div>
  );
}

export default AdminApp;
