import { useState } from "react";
import "../../styles/inicioAdmin.css";
import AdminLayout from "../../layouts/AdminLayout";

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
        <section id="listar-usuarios" className="section">
          <h2>Listar Usuarios</h2>
          <p>
            Aquí se muestran los usuarios que están en la plataforma con su
            respectivo rol.
          </p>

          <div className="card">
            <div className="table-responsive">
              <table id="dataTableUsuarios">
                <thead>
                  <tr>
                    <th>Nombre completo</th>
                    <th>Correo</th>
                    <th>Teléfono</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {seccionActiva === "gestionar-categorias" && (
        <section id="gestionar-categorias" className="section">
          <div id="addCategoria">
            <h2>Gestionar Categorías</h2>
            <button id="btnagregar" onClick={irAgregarCategoria}>
              <img src="./img/iconos/plus.png" alt="icono agregar" /> Agregar
            </button>
          </div>

          <p>Aquí podrás gestionar las categorías de los productos.</p>

          <div className="card">
            <div className="table-responsive">
              <table id="dataTableCategorias">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </AdminLayout>
  );
}
