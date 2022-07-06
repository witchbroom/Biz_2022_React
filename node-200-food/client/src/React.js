import logo from "./logo.svg";
import "./React.css";
import "./w3css.css";
import FoodInput from "./comps/FoodInput";

function React() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <button class="w3-button" id="apply">
        섭취정보 등록
      </button>
      <hr></hr>
      <div class="input_box">
        식품명 : <input label="식품명" type="text" />
        섭취량 : <input label="섭취량" type="number" />
        칼로리 : <input label="칼로리" type="number" />
      </div>
      <button class="w3-button" id="applybtn">
        등록하기
      </button>
      <hr></hr>
      <table class="w3-table w3-table-all">
        <tr>
          <td>날짜</td>
          <td>식품명</td>
          <td>섭취량</td>
          <td>칼로리</td>
        </tr>
        <FoodInput />
      </table>
    </div>
  );
}

export default React;
