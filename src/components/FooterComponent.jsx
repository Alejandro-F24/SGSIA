import { Link } from "react-router-dom";

export const FooterComponent = () => {
  return (
    <>
      <div className="footer-logo-media">
        <div className="footer-logo-name">
          <div className="footer-logo">
            <img src="/white-logo.webp" alt="Logo de la empresa en el footer" />
          </div>
          <p>SGSIA</p>
        </div>
        <div className="footer-media">
          <a href="https://www.facebook.com/" target="_blank">
            <img
              src="/icons/facebook.png"
              alt="Icono facebook, envia al facebook de la empresa"
            />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img
              src="/icons/instagram.png"
              alt="Icono instagram, envia al ig de la empresa"
            />
          </a>
          <a href="https://co.linkedin.com/" target="_blank">
            <img src="/icons/linkedin.png" alt="" />
          </a>
        </div>
      </div>
      <div className="footer-pages">
        <div className="footer-management-pages">
          <p className="footer-pages-title">Gestión</p>
          <Link to="/customers">
            <p>Clientes</p>
          </Link>
          <Link to="/suppliers">
            <p>Proveedores</p>
          </Link>
          <Link to="/underConstruction">
            <p>Seguimiento</p>
          </Link>
        </div>
        <div className="footer-other-pages">
          <p className="footer-pages-title">Variado</p>
          <Link to="/underConstruction">
            <p>Notificaciones</p>
          </Link>
          <Link to="/underConstruction">
            <p>Inventario</p>
          </Link>
          <Link to="/underConstruction">
            <p>Configuración</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
