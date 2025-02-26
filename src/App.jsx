import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SuppliersPage from "./pages/SuppliersPage";
import CustomersPage from "./pages/CustomersPage";
import UnderConstruction from "./pages/UnderConstruction";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/suppliers" element={<SuppliersPage />} />
        <Route path="/customers" element={<CustomersPage />}></Route>
        <Route
          path="/underConstruction"
          element={<UnderConstruction />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
