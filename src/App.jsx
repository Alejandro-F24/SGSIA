// ARCHIVO: App.jsx
// Descripción: Este componente define las rutas principales de la aplicación utilizando `react-router-dom`.
// Permite la navegación entre diferentes páginas de la aplicación.
// Es necesario importar las paginas aqui para enrutarlas

import "./App.css"; // Importación de estilos globales
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importación de React Router
import HomePage from "./pages/HomePage";
import SuppliersPage from "./pages/SuppliersPage";
import CustomersPage from "./pages/CustomersPage";
import UnderConstruction from "./pages/UnderConstruction";

function App() {
  return (
    <Router>
      {" "}
      {/* Componente principal que habilita la funcionalidad de enrutamiento */}
      <Routes>
        {" "}
        {/* Define las rutas dentro de la aplicación */}
        {/* Ruta para la página de inicio */}
        <Route path="/" element={<HomePage />} />
        {/* Ruta para la página de proveedores */}
        <Route path="/suppliers" element={<SuppliersPage />} />
        {/* Ruta para la página de clientes */}
        <Route path="/customers" element={<CustomersPage />} />
        {/* Ruta para la página de "En construcción" */}
        <Route path="/underConstruction" element={<UnderConstruction />} />
      </Routes>
    </Router>
  );
}

export default App; // Exportación del componente App para su uso en el proyecto
