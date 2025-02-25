import "./SuppliersPage.css";
import HeaderComponent from "../components/HeaderComponent";
import ImagesCarousel from "../components/ImagesCarouselComponent";
import SuppliersTableComponent from "../components/SuppliersTableComponent";

const SuppliersPage = () => {
  return (
    <>
      <header>
        <HeaderComponent />
      </header>
      <main>
        <div className="suppliers-logo-carousel">
          <ImagesCarousel />
        </div>
        <div className="suppliers-crud-table">
          <div className="suppliers-crud">
            <div className="suppleirs-crud-container">
              <h2>PROVEEDORES</h2>
              <button className="action-button">AGREGAR</button>
              <button className="action-button">EDITAR</button>
              <button className="action-button">ELIMINAR</button>
            </div>
          </div>
          <div className="suppliers-table">
            <SuppliersTableComponent />
          </div>
        </div>
      </main>
    </>
  );
};

export default SuppliersPage;
