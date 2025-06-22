import '../../styles/register.css';


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

        <button type="submit" id="btnRegistrar">
          Registrar
        </button>

        <div className="iniciarSesion">
          <p>
            ¿Ya tiene una cuenta? <a href="login.html">Iniciar sesion</a>
          </p>
        </div>
      </div>
    </article>
  );
}
