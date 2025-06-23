import '../styles/navBarAdmin.css';

export default function NavBarAdmin({ setSeccionActiva }) {
  return (
    <nav>
      <ul>
        <li>
          <a href="#" onClick={() => setSeccionActiva("listar-usuarios")}>
            Listar Usuarios
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setSeccionActiva("gestionar-categorias")}>
            Gestionar Categorías
          </a>
        </li>
        <li>
          <a href="listarReportes.html">Gestionar Reportes</a>
        </li>
      </ul>
    </nav>
  );
}
