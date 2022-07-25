import item from "./Item";
import View from "./View";
import { userAppContext } from "react";

// addrList 배열의 값을 표형식으로 구현하기
const List = (addrList) => {
  /*
  부모 Container 로부터 props로 전달받던 addrList state 배열을
  AppContext.Provider의 Store에서 제공받기
  */
  const { addrList } = useContext(AppContext);

  const addrBody = addrList.map((addr) => {
    return <Item addr={addr} />;
  });

  return (
    <>
      <View />
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>전화번호</th>
            <th>주소</th>
          </tr>
        </thead>
      </table>
    </>
  );
};

export default List;
