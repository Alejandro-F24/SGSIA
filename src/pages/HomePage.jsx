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
      <header>
        <HeaderComponent />
      </header>
      <main>
        <div className="quick-report-title">
          <h1>Reporte Rápido</h1>
        </div>
        <div className="quick-report-cards">
          <CardsComponents />
        </div>
        <div className="quick-report-inventory-notifications">
          <div className="inventory-graph">
            <div className="pie-graph">
              <PieGraphComponent />
            </div>
          </div>
          <div className="notifications">
            <div className="last-notification-container">
              <LastNotificationsComponent />
            </div>
          </div>
        </div>
        <div className="general-monitoring-title">
          <h1>Seguimiento General</h1>
        </div>
        <div className="general-monitoring">
          <GeneralMonitoringComponent />
        </div>
        <div className="subsidiary-title">
          <h1>Sucursales</h1>
        </div>
        <div className="subsidiary-body">
          <SubsidiaryComponent />
        </div>
        <div className="suppliers-title">
          <h1>Principales Proveedores</h1>
        </div>
        <div className="suppliers-body">
          <SuppliersComponent />
        </div>
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </>
  );
};

export default HomePage;
