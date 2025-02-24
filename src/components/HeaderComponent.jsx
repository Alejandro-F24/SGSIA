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
            <img src={empresaLogo} alt="" />
          </li>
          <li>
            <h2>SGSIA</h2>
          </li>
        </div>
        <div className="nav-links">
          <li>
            <a href="#">Clientes</a>
          </li>
          <li>
            <a href="#">Proveedores</a>
          </li>
          <li>
            <a href="#">Seguimiento</a>
          </li>
          <li>
            <a href="#">Inventario</a>
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
