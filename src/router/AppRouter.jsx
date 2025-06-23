import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/user/Register";
import InicioAdmin from "../pages/admin/InicioAdmin";
  
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<InicioAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}
