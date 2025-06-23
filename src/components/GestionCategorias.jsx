import "../styles/gestionCategorias.css";
import BtnAgregar  from "../components/buttons/BtnAgregar";
export default function GestionUsuarios() {
  return (
    <section id="gestionar-categorias" className="section">
          <div id="addCategoria">
            <h2>Gestionar Categorías</h2>
            <BtnAgregar nuevaPagina="/login"/>
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
  )
}