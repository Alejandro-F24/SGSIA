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
          <a href="#">
            <img
              src="/icons/facebook.png"
              alt="Icono facebook, envia al facebook de la empresa"
            />
          </a>
          <a href="#">
            <img
              src="/icons/instagram.png"
              alt="Icono instagram, envia al ig de la empresa"
            />
          </a>
          <a href="#">
            <img src="/icons/linkedin.png" alt="" />
          </a>
        </div>
      </div>
      <div className="footer-pages">
        <div className="footer-management-pages">
          <p className="footer-pages-title">Gestión</p>
          <a href="#">
            <p>Clientes</p>
          </a>
          <a href="#">
            <p>Proveedores</p>
          </a>
          <a href="#">
            <p>Seguimiento</p>
          </a>
        </div>
        <div className="footer-other-pages">
          <p className="footer-pages-title">Variado</p>
          <a href="#">
            <p>Notificaciones</p>
          </a>
          <a href="#">
            <p>Inventario</p>
          </a>
          <a href="#">
            <p>Configuración</p>
          </a>
        </div>
      </div>
    </>
  );
};
