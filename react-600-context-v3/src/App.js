import logo from "./logo.svg";
import "./App.css";
import Main from "./comps/Main";
import { useContext, useState } from "react";
import AppContext from "./context/ContextProvider";

function App() {
  /*
  프로젝트에서 사용할 state 변수와 setState 함수를 모두 App.js(가장 상위) 컴포넌트로 이동하고
  Main 컴포넌트를 AppContext.Provider로 감싸고 AppContext.Provider 에게 value 변수로
  state 변수와 setState 함수를 전달하였다

  이제 모든 변수와 함수는 AppContext.Provider의 Store에 보관된다
  */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="로고" />
      </header>
      <AppContext>
        <Main />
      </AppContext>
    </div>
  );
}

export default App;
