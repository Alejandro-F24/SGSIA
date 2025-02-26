import { Link } from "react-router-dom";

/**
 * Componente de pie de página (Footer) Global para donde se requiera.
 *
 * Este componente muestra el logo de la empresa, enlaces a redes sociales y
 * enlaces de navegación a diferentes secciones de la aplicación.
 */
export const FooterComponent = () => {
  return (
    <>
      {/* Sección del logo y redes sociales */}
      <div className="footer-logo-media">
        <div className="footer-logo-name">
          {/* Logo de la empresa */}
          <div className="footer-logo">
            <img src="/white-logo.webp" alt="Logo de la empresa en el footer" />
          </div>
          <p>SGSIA</p>
        </div>

        {/* Íconos de redes sociales con enlaces externos */}
        <div className="footer-media">
          <a href="https://www.facebook.com/" target="_blank">
            <img
              src="/icons/facebook.png"
              alt="Icono de Facebook, redirige al perfil de la empresa"
            />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img
              src="/icons/instagram.png"
              alt="Icono de Instagram, redirige al perfil de la empresa"
            />
          </a>
          <a href="https://co.linkedin.com/" target="_blank">
            <img
              src="/icons/linkedin.png"
              alt="Icono de LinkedIn, redirige al perfil de la empresa"
            />
          </a>
        </div>
      </div>

      {/* Sección de enlaces internos a otras páginas */}
      <div className="footer-pages">
        {/* Sección de enlaces de gestión */}
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

        {/* Sección de otros enlaces */}
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
