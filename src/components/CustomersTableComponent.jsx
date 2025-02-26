export const CustomersTableComponent = ({ clients }) => {
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
