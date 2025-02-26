import { Link } from "react-router-dom";
import empresaLogo from "../assets/white-logo.webp";
import usuarioIcono from "../assets/white-usuario.png";
import notificacionIcono from "../assets/white-notifications.png";

/**
 * Componente del encabezado (Header) de la aplicación.
 *
 * Este componente muestra el logo de la empresa, el nombre del sistema,
 * enlaces de navegación a diferentes secciones y botones de notificaciones y usuario.
 */
export const HeaderComponent = () => {
  return (
    <nav>
      <ul>
        {/* Sección del logo y nombre */}
        <div className="nav-logo">
          <li>
            <Link to="/">
              <img src={empresaLogo} alt="Logo de la empresa" />
            </Link>
          </li>
          <li>
            <h2>SGSIA</h2>
          </li>
        </div>

        {/* Enlaces de navegación */}
        <div className="nav-links">
          <li>
            <Link to="/customers">Clientes</Link>
          </li>
          <li>
            <Link to="/suppliers">Proveedores</Link>
          </li>
          <li>
            <Link to="/underConstruction">Seguimiento</Link>
          </li>
          <li>
            <Link to="/underConstruction">Inventario</Link>
          </li>

          {/* Icono de notificaciones */}
          <li>
            <a href="#">
              <img src={notificacionIcono} alt="Icono de notificaciones" />
            </a>
          </li>

          {/* Icono de usuario */}
          <li>
            <a href="#">
              <img src={usuarioIcono} alt="Icono de usuario" />
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default HeaderComponent;
