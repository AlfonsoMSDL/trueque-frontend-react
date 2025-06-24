import '../../styles/register.css';
import BtnAccess from '../../components/buttons/BtnAccess';
import {Link} from 'react-router-dom';

export default function Register() {
  return (
    <article className="container-register">
      <div id="registro">
        <h1 id="ttlRegistro">Registro</h1>

        <div id="nombreCompleto">
          <div className="entradaDatos">
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Nombre"
              required
            />
          </div>

          <div className="entradaDatos">
            <input
              type="text"
              name="apellido"
              id="apellido"
              placeholder="Apellido"
              required
            />
          </div>
        </div>

        <div className="entradaDatos">
          <input
            type="number"
            name="telefono"
            id="telefono"
            placeholder="Teléfono"
            required
          />
        </div>

        <div className="entradaDatos">
          <input
            type="email"
            name="correo"
            id="correo"
            placeholder="Correo"
            required
          />
        </div>

        <div className="entradaDatos">
          <input
            type="password"
            name="clave"
            id="clave"
            placeholder="Contraseña"
            required
          />
        </div>

        <div className="entradaDatos">
          <input
            type="password"
            name="repetir_clave"
            id="repetir_clave"
            placeholder="Repetir contraseña"
            required
          />
        </div>

        <BtnAccess>Registrar</BtnAccess>

        <div className="iniciarSesion">
          <p>
            ¿Ya tiene una cuenta? <Link to="/login">Iniciar sesion</Link>
          </p>
        </div>
      </div>
    </article>
  );
}
