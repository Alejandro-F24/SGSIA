export const SuppliersTableComponent = () => {
  const suppliersData = [
    {
      id: 1,
      name: "AgroInsumos S.A.",
      service: "Venta de insumos agrícolas",
      serviceCount: 25,
      contractValue: "$48,000,000 COP",
      associationDate: "2020-03-15",
      address: "Carrera 10 #23-45, Bogotá",
    },
    {
      id: 2,
      name: "Logística Express Ltda.",
      service: "Logística",
      serviceCount: 18,
      contractValue: "$36,500,000 COP",
      associationDate: "2019-06-20",
      address: "Avenida Oriental #45-67, Medellín",
    },
    {
      id: 3,
      name: "AgroAndes SAS",
      service: "Venta de insumos agrícolas",
      serviceCount: 30,
      contractValue: "$55,000,000 COP",
      associationDate: "2021-01-10",
      address: "Calle 50 #12-90, Cali",
    },
    {
      id: 4,
      name: "Transportes Nacionales",
      service: "Logística",
      serviceCount: 20,
      contractValue: "$42,700,000 COP",
      associationDate: "2018-09-05",
      address: "Carrera 7 #18-30, Bucaramanga",
    },
    {
      id: 5,
      name: "AgroColombia LTDA",
      service: "Venta de insumos agrícolas",
      serviceCount: 15,
      contractValue: "$29,800,000 COP",
      associationDate: "2022-04-12",
      address: "Calle 100 #25-40, Barranquilla",
    },
    {
      id: 6,
      name: "Distribuidora AgroCafé",
      service: "Venta de insumos agrícolas",
      serviceCount: 12,
      contractValue: "$27,500,000 COP",
      associationDate: "2020-11-25",
      address: "Carrera 15 #45-78, Cartagena",
    },
    {
      id: 7,
      name: "Carga Express S.A.S",
      service: "Logística",
      serviceCount: 22,
      contractValue: "$50,000,000 COP",
      associationDate: "2017-07-19",
      address: "Avenida 30 #56-12, Pereira",
    },
    {
      id: 8,
      name: "Soluciones AgroVerde",
      service: "Venta de insumos agrícolas",
      serviceCount: 10,
      contractValue: "$18,900,000 COP",
      associationDate: "2019-12-03",
      address: "Carrera 9 #22-34, Cúcuta",
    },
    {
      id: 9,
      name: "EnvíaLogística SAS",
      service: "Logística",
      serviceCount: 28,
      contractValue: "$57,600,000 COP",
      associationDate: "2023-05-30",
      address: "Calle 33 #7-23, Santa Marta",
    },
    {
      id: 10,
      name: "AgroAlianza Ltda.",
      service: "Venta de insumos agrícolas",
      serviceCount: 17,
      contractValue: "$35,200,000 COP",
      associationDate: "2016-02-14",
      address: "Avenida Bolívar #89-45, Villavicencio",
    },
  ];

  return (
    <div className="suppliers-table-container">
      <div className="suppliers-table-wrapper">
        <table className="suppliers-table-element">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Servicio</th>
              <th># Servicios Activos</th>
              <th>Valor Total Contratos</th>
              <th>Fecha Asociación</th>
              <th>Dirección</th>
            </tr>
          </thead>
          <tbody>
            {suppliersData.map((supplier) => (
              <tr key={supplier.id}>
                <td>{supplier.id}</td>
                <td>{supplier.name}</td>
                <td>{supplier.service}</td>
                <td>{supplier.serviceCount}</td>
                <td>{supplier.contractValue}</td>
                <td>{supplier.associationDate}</td>
                <td>{supplier.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SuppliersTableComponent;
