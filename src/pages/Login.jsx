import '../styles/login.css';

export default function Login() {
  return (
    <article className="container-login">
      <div id="login">
        <h1 id="ttlLogin">Login</h1>
        <div className="entradaDatos">
          <input
            type="email"
            name="correo"
            id="correo"
            placeholder="Correo"
            required
          />
          <i className="bx bxs-user"></i>
        </div>

        <div className="entradaDatos">
          <input
            type="password"
            name="clave"
            id="clave"
            placeholder="Contraseña"
            required
          />
          <i id="icono" className="bx bxs-lock-alt"></i>
        </div>

        <div className="recordarClave">
          <label>
            {" "}
            <input type="checkbox" /> Recordar{" "}
          </label>
          <a href="#">¿Olvidó su contraseña?</a>
        </div>

        <button type="submit" id="btnLogin">
          Login
        </button>

        <div className="registrar">
          <p>
            ¿No tiene una cuenta?
            <a href="registro.html">Registrar</a>
          </p>
        </div>
      </div>

      <script src="./js/login.js"></script>

      <script src="./js/sweetalert2.min.js"></script>
    </article>
  );
}
