// Componente SuppliersTableComponent
// Este componente muestra una tabla con la información de los proveedores recibida como props.

export const SuppliersTableComponent = ({ suppliers }) => {
  return (
    <div className="suppliers-table-container">
      {/* Contenedor principal de la tabla */}
      <div className="suppliers-table-wrapper">
        {/* Elemento de la tabla */}
        <table className="suppliers-table-element">
          <thead>
            {/* Encabezado de la tabla con los nombres de las columnas */}
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
            {/* Iteramos sobre la lista de proveedores para generar las filas */}
            {suppliers.map((supplier) => {
              return (
                <tr key={supplier.id}>
                  {/* Cada celda representa un dato del proveedor */}
                  <td>{supplier.id}</td>
                  <td>{supplier.name}</td>
                  <td>{supplier.service}</td>
                  <td>{supplier.serviceCount}</td>
                  <td>{supplier.contractValue}</td>
                  <td>{supplier.associationDate}</td>
                  <td>{supplier.address}</td>
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
