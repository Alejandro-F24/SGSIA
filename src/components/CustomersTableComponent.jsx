/**
 * Componente CustomersTableComponent
 *
 * Este componente muestra una tabla con información de clientes.
 * Verifica que la lista de clientes sea un array antes de renderizar.
 *
 * @param {Object[]} clients - Lista de clientes a mostrar.
 * @param {string} clients[].id - Identificador único del cliente.
 * @param {string} clients[].name - Nombre del cliente.
 * @param {string} clients[].type - Tipo de cliente (ej. "Empresa", "Individual").
 * @param {string} clients[].nit - Número de identificación tributaria del cliente.
 * @param {string} clients[].number - Teléfono de contacto del cliente.
 * @param {string} clients[].registerDate - Fecha de registro del cliente.
 * @param {string} clients[].status - Estado actual del cliente (ej. "Activo", "Inactivo").
 * @param {Object[]} clients[].record - Historial de compras del cliente.
 * @param {number} clients[].record[].total - Monto total de una compra en el historial.
 */
export const CustomersTableComponent = ({ clients }) => {
  // Si clients no es un array válido, muestra un mensaje de error
  if (!Array.isArray(clients)) {
    return <p>No hay clientes disponibles.</p>;
  }

  return (
    <div className="table-container">
      <table className="clients-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>NIT</th>
            <th>Teléfono</th>
            <th>Fecha Registro</th>
            <th>Estado</th>
            <th>Total Comprado</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => {
            // Calcula el total comprado sumando los valores del historial de compras
            const total = Array.isArray(client.record)
              ? client.record.reduce((sum, order) => sum + order.total, 0)
              : 0;

            return (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.name}</td>
                <td>{client.type}</td>
                <td>{client.nit}</td>
                <td>{client.number}</td>
                <td>{client.registerDate}</td>
                <td className={client.status.toLowerCase()}>{client.status}</td>
                <td>${total.toLocaleString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersTableComponent;
