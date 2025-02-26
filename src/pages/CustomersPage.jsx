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
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // 'add', 'edit', 'delete'

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalType("");
  };

  return (
    <>
      <header>
        <HeaderComponent />
      </header>
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
        <div className="customers-table">
          <CustomersTableComponent clients={customersData.customers} />
        </div>
      </main>

      {/* Modal */}
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
              // Aquí puedes actualizar la lista de clientes si es necesario.
            }}
          />
        )}
      </ModalComponent>
    </>
  );
};

export default CustomersPage;
