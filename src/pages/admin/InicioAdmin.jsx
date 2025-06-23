import { useState } from "react";
import "../../styles/inicioAdmin.css";
import AdminLayout from "../../layouts/AdminLayout";

import GestionUsuarios from "../../components/GestionUsuarios";
import GestionCategorias from "../../components/GestionCategorias";

export default function InicioAdmin() {
  const [seccionActiva, setSeccionActiva] = useState("listar-usuarios");

  const showSection = (id) => {
    setSeccionActiva(id);
  };

  const cerrarSesion = () => {};

  const irAgregarCategoria = () => {
    window.location.href = "agregarCategoria.html";
  };

  return (
    <AdminLayout
      cerrarSesion={cerrarSesion}
      setSeccionActiva={setSeccionActiva}
    >
      {seccionActiva === "listar-usuarios" && (
        <GestionUsuarios />
      )}

      {seccionActiva === "gestionar-categorias" && (
        <GestionCategorias />
      )}
    </AdminLayout>
  );
}
