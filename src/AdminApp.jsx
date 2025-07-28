import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import AdminUsuarios from "./pages/Admin/AdminUsuarios.jsx";
import AdminReservas from "./pages/Admin/AdminReservas.jsx";

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
