import { useState } from "react";
import "./SuppliersPage.css";
import suppliersData from "../data/suppliersData.json";
import HeaderComponent from "../components/HeaderComponent";
import ImagesCarousel from "../components/ImagesCarouselComponent";
import SuppliersTableComponent from "../components/SuppliersTableComponent";
import AddSuppliersComponent from "../components/AddSupplierComponent";
import DeleteSupplierComponent from "../components/DeleteSupplierComponent";
import EditSupplierComponent from "../components/EditSupplierComponent";
import ModalComponent from "../components/ModalComponent";

const SuppliersPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // 'add', 'edit', 'delete'

  /**
   * Abre el modal correspondiente al tipo de operación seleccionada.
   *
   */
  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  /**
   * Cierra el modal y reinicia su tipo.
   */
  const closeModal = () => {
    setModalOpen(false);
    setModalType("");
  };

  return (
    <>
      {/* Encabezado de la página */}
      <header>
        <HeaderComponent />
      </header>

      <main>
        {/* Carrusel de logos de proveedores */}
        <div className="suppliers-logo-carousel">
          <ImagesCarousel />
        </div>

        <div className="suppliers-top-body">
          <div className="suppliers-info"></div>
          <div className="suppliers-crud">
            <button
              className="suppliers-button"
              onClick={() => openModal("add")}
            >
              Añadir
            </button>
            <button
              className="suppliers-button"
              onClick={() => openModal("edit")}
            >
              Editar
            </button>
            <button
              className="suppliers-button"
              onClick={() => openModal("delete")}
            >
              Eliminar
            </button>
          </div>
        </div>

        {/* Tabla de proveedores */}
        <div className="suppliers-table">
          <SuppliersTableComponent suppliers={suppliersData.suppliers} />
        </div>
      </main>

      {/* Modal de operaciones */}
      <ModalComponent isOpen={modalOpen} onClose={closeModal}>
        {modalType === "add" && <AddSuppliersComponent onClose={closeModal} />}
        {modalType === "edit" && <EditSupplierComponent onClose={closeModal} />}
        {modalType === "delete" && (
          <DeleteSupplierComponent
            onClose={closeModal}
            onDeleteSuccess={(deletedId) => {
              console.log(
                `Proveedor ${deletedId} eliminado, actualizando lista`
              );
              // Aquí se puede actualizar la lista de proveedores si es necesario.
            }}
          />
        )}
      </ModalComponent>
    </>
  );
};

export default SuppliersPage;
