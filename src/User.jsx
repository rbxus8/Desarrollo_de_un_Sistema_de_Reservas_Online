import { Routes, Route } from "react-router-dom";
import Main from "./main.jsx";
import Login from "./Login.jsx";
import AdminApp from "./AdminApp.jsx";
import Registrarse from "./Registrarse.jsx";

function User() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/admin" element={<AdminApp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrarse" element={<Registrarse />} />
      </Routes>
    </>
  );
}

export default User;
