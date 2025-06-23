import "../styles/gestionUsuarios.css";
export default function GestionUsuarios() {
  return (
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
  );
}
