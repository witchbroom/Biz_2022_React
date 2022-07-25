// Store(Context.Provider) import
import AppContext from "../context/ContextProvider";
import { useContext } from "react";

const Input = () => {
  // Context.Provider Store에 보관된 2개의 state 변수와
  // 2개의 setState 함수를 사용요청한다
  const { address, setAddress, addrList, setAddrList } = useContext(AppContext);
  // address state(객체)변수에서 각 요소를 추출 : Input box에서 사용
  const { a_name, a_tel, a_address } = address;

  const onChangeEvent = (e) => {
    const { name, value } = e.target;
    //   [name] = value;
    setAddress({ ...address, [name]: value });
  };

  /*
  저장버튼을 클릭하면
  address 에 저장된 데이터를 addrList 추가하기
  addrList도 Main에서 만든 state 배열이다
  때문에 addrList에 데이터를 추가하려면 Main에서 함수를 생성하여
  props로 전달하고 여기의 onClickEvent에서
  호출하여 addrList에 추가한다

  Main setAddrList 함수를 props로 전달받고
  setAddrList 함수를 사용하여 addrList에 추가하는 코드를 작성
  */
  const onClickEvent = (e) => {
    // addrList 배열을 복제하고
    // address state 변수를 추가하여 새로운 addrList를 setting
    setAddrList([...addrList, address]);
  };

  return (
    <>
      <input
        onChange={onChangeEvent}
        name="a_name"
        placeholder="이름"
        value={a_name}
      />
      <input
        onChange={onChangeEvent}
        name="a_tel"
        placeholder="전화번호"
        value={a_tel}
      />
      <input
        name="a_address"
        onChange={onChangeEvent}
        placeholder="주소"
        value={a_address}
      />
      <button onClick={onClickEvent}>저장</button>
    </>
  );
};

export default Input;
