/**
 * CustomersPage Component
 *
 * Este componente representa la página de gestión de clientes.
 * Permite visualizar una tabla con la información de los clientes
 * y realizar operaciones CRUD (Añadir, Editar (En desarrollo), Eliminar) mediante un modal.
 */

import { useState } from "react";
import "./CustomersPage.css";
import customersData from "../data/customersData.json";
import HeaderComponent from "../components/HeaderComponent";
import CustomersTableComponent from "../components/CustomersTableComponent";
import AddCustomersComponent from "../components/AddCustomersComponent.jsx";
import EditCustomersComponent from "../components/EditCustomersComponent.jsx";
import DeleteCustomersComponent from "../components/DeleteCustomersComponent.jsx";
import ModalComponent from "../components/ModalComponent";

export const CustomersPage = () => {
  const [modalOpen, setModalOpen] = useState(false); // Estado para controlar la visibilidad del modal
  const [modalType, setModalType] = useState(""); // ('add', 'edit', 'delete')

  /**
   * Abre el modal correspondiente al tipo de operación seleccionada.
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
      {/* Cuerpo de la página */}
      <main>
        <div className="customers-top-body">
          <div className="customers-info"></div>
          <div className="customers-crud">
            <button
              className="customers-button"
              onClick={() => openModal("add")}
            >
              Añadir
            </button>
            <button
              className="customers-button"
              onClick={() => openModal("edit")}
            >
              Editar
            </button>
            <button
              className="customers-button"
              onClick={() => openModal("delete")}
            >
              Eliminar
            </button>
          </div>
        </div>

        {/* Tabla de clientes */}
        <div className="customers-table">
          <CustomersTableComponent clients={customersData.customers} />
        </div>
      </main>

      {/* Modal de operaciones */}
      <ModalComponent isOpen={modalOpen} onClose={closeModal}>
        {modalType === "add" && <AddCustomersComponent onClose={closeModal} />}
        {modalType === "edit" && (
          <EditCustomersComponent onClose={closeModal} />
        )}
        {modalType === "delete" && (
          <DeleteCustomersComponent
            onClose={closeModal}
            onDeleteSuccess={(deletedId) => {
              console.log(`Cliente ${deletedId} eliminado, actualizando lista`);
              // Aquí se puede actualizar la lista de clientes si es necesario.
            }}
          />
        )}
      </ModalComponent>
    </>
  );
};

export default CustomersPage;
