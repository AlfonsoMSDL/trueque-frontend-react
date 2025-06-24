import '../styles/login.css';
import BtnAccess from '../components/buttons/BtnAccess';
import {Link} from 'react-router-dom';

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

        <BtnAccess>Login</BtnAccess>

        <div className="registrar">
          <p>
            ¿No tiene una cuenta?
            <Link to="/register">Registrar</Link>
          </p>
        </div>
      </div>

    </article>
  );
}
