import "./HomePage.css";
import { HeaderComponent } from "../components/HeaderComponent";
import { CardsComponents } from "../components/CardsComponent";
import { LastNotificationsComponent } from "../components/LastNotificationsComponent";
import { PieGraphComponent } from "../components/PieGraphComponent";
import { GeneralMonitoringComponent } from "../components/GeneralMonitoringComponent";
import { SubsidiaryComponent } from "../components/SubsidiaryComponent";
import { SuppliersComponent } from "../components/SuppliersComponent";
import { FooterComponent } from "../components/FooterComponent";

const HomePage = () => {
  return (
    <>
      {/* Encabezado de la página */}
      <header>
        <HeaderComponent />
      </header>

      <main>
        {/* Sección de Reporte Rápido */}
        <div className="quick-report-title">
          <h1>Reporte Rápido</h1>
        </div>
        <div className="quick-report-cards">
          <CardsComponents />
        </div>

        <div className="quick-report-inventory-notifications">
          {/* Gráfica de Inventario */}
          <div className="inventory-graph">
            <div className="pie-graph">
              <PieGraphComponent />
            </div>
          </div>

          {/* Últimas notificaciones */}
          <div className="notifications">
            <div className="last-notification-container">
              <LastNotificationsComponent />
            </div>
          </div>
        </div>

        {/* Sección de Seguimiento General */}
        <div className="general-monitoring-title">
          <h1>Seguimiento General</h1>
        </div>
        <div className="general-monitoring">
          <GeneralMonitoringComponent />
        </div>

        {/* Sección de Sucursales */}
        <div className="subsidiary-title">
          <h1>Sucursales</h1>
        </div>
        <div className="subsidiary-body">
          <SubsidiaryComponent />
        </div>

        {/* Sección de Proveedores */}
        <div className="suppliers-title">
          <h1>Principales Proveedores</h1>
        </div>
        <div className="suppliers-body">
          <SuppliersComponent />
        </div>
      </main>

      {/* Pie de página */}
      <footer>
        <FooterComponent />
      </footer>
    </>
  );
};

export default HomePage;
