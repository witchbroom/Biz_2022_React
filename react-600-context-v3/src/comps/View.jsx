import { useAppContext } from "../context/ContextProvider";

/*
App.js에서 생성한 address state를
Main.jsx에 공급하고
Main.jsx 는 List에 공급하고
List.jsx는 다시 View.jsx에 공급하고

AppContext.Provider 에서 제공받음으로서
Main.jsx와 List.jsx의 관여 없이
직접 address state를 사용할 수 있게 된다

useContext는 React 16.x 버전부터 공식적으로 지원
*/
const View = ({ address }) => {
  const { address } = useContext(AppContext);
  const { a_name, a_tel, a_address } = address;
  return (
    <div>
      <h3>이름 : </h3>
      <span>{a_name}</span>
      <h3>전화번호 : </h3>
      <span>{a_tel}</span>
      <h3>주소 : </h3>
      <span>{a_address}</span>
    </div>
  );
};

export default View;
