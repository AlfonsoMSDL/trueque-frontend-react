import '../styles/headerAdmin.css';
export default function HeaderAdmin({cerrarSesion}) {
  return (
    <header>
      <h1>Bienvenido al Panel de Administrador</h1>
      <button id="cerrarSesion" onClick={cerrarSesion}>
        Cerrar sesión
      </button>
    </header>
  );
}
