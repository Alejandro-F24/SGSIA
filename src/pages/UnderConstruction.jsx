import HeaderComponent from "../components/HeaderComponent";
import "./UnderConstruction.css";

const UnderConstruction = () => {
  return (
    <>
      <header>
        <HeaderComponent />
      </header>
      <div className="construction-container">
        <h1 className="construction-title">🚧 En Construcción 🚧</h1>
        <div className="construction-image">
          <img
            src="/media/general/underConstruction.jpg"
            alt="Página en construcción"
          />
        </div>
      </div>
    </>
  );
};

export default UnderConstruction;
