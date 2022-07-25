import "./App.css";
import "./w3css.css";
import TodoMain from "./comps/TodoMain";

function App() {
  return (
    <div className="App">
      <header className="App-header w3-bar">
        <strong>오늘 할일</strong>
      </header>
      <TodoMain />
    </div>
  );
}

export default App;
