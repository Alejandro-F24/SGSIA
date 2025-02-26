export const SuppliersTableComponent = ({ suppliers }) => {
  return (
    <div className="suppliers-table-container">
      <div className="suppliers-table-wrapper">
        <table className="suppliers-table-element">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Servicio</th>
              <th># De Servicios Activos</th>
              <th>Valor Total de Contratos</th>
              <th>Fecha de Asociación</th>
              <th>Dirección</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((suppliers) => {
              return (
                <tr key={suppliers.id}>
                  <td>{suppliers.id}</td>
                  <td>{suppliers.name}</td>
                  <td>{suppliers.service}</td>
                  <td>{suppliers.serviceCount}</td>
                  <td>{suppliers.contractValue}</td>
                  <td>{suppliers.associationDate}</td>
                  <td>{suppliers.address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SuppliersTableComponent;
