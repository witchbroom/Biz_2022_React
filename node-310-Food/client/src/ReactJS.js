import logo from "./logo.svg";
import "./ReactJS.css";
import DietMain from "./comps/DietMain.jsx";

function ReactJS() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <DietMain />
    </div>
  );
}

export default ReactJS;
