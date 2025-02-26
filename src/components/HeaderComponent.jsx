import { Link } from "react-router-dom";
import empresaLogo from "../assets/white-logo.webp";
import usuarioIcono from "../assets/white-usuario.png";
import notificacionIcono from "../assets/white-notifications.png";

// Here is the coment

export const HeaderComponent = () => {
  return (
    <nav>
      <ul>
        <div className="nav-logo">
          <li>
            <Link to="/">
              <img src={empresaLogo} alt="" />
            </Link>
          </li>
          <li>
            <h2>SGSIA</h2>
          </li>
        </div>
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
          <li>
            <a href="#">
              <img src={notificacionIcono} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={usuarioIcono} alt="" />
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default HeaderComponent;
