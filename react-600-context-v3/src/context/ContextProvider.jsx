import { createContext, useContext, useState } from "react";

const AppContext = createContext();

// 각각 props 가 필요한 Component들이
// useContext 를 사용하여 props 들을 분해하던 코드를
// 여기서 함수로 선언하고 결과를 return한다

/*
hook 함수
React가 처음 탄생할때는 class 를 사용하여 컴포넌트를 만들었다
JS class를 사용하면 기존의 JS 코드의 장점을 많이 활용하기가 다소 어렵다
JS class Java 클래스에 비하면 class 만드는데 상당히 복잡한 코드들이 필요하다
class에 method를 추가하거나 어떤 변수를 선언할때도 상당히 어려움이 있다

React에서는 class로 컴포넌트를 제작하는 대신
함수를 사용하여 컴포넌트를 제작하는 문법을 도입한다

16 버전 이전에는 함수형 컴포넌트에서는 class 컴포넌트에 비해
Life Cycle 관리 매우 어려웠다
이 부분을 고민하던 React 개발자(페이스북 개발자들)들이
16.8 버전에서 Hook 함수를 내놓는다
useState() : state 변수를 생성하는 함수
useEffect() : state 변수가 변동될때
React 사용자가 어떤 코드를 실행하고자 할때 코드를 작성하는 함수
화면이 rendering 될때 fetch 데이터를 가져오거나 할때
1. 화면이 최초 rendering 될때 자동으로 호출되는 함수
2. state 변수를 지정하여 state 변수가 변화될때

Hook 함수는 모두가 use 접두사로 시작
useContext() : ContextProvider의 Store에 저장된 변수, 함수
*/

/* 
useContext 함수를 대신하는 사용자정의 Hook 함수
useContext 함수는 어떤 Provider Store에 저장된 데이터인지를 항상 명시해줘야 한다
함수를 사용할 때 반드시 무엇인가를 명시해주는 것은 코딩을 하는 입장에서 다소 불편할 수 있다

그래서 원래 있던 useContext를 useAppContext로 재정의하고
사용자는 이제 어떤 Provider를 사용해야 되는지 걱정하지 않아도 될 수 있도록 만든다

사용자정의 Hook 함수 
*/
const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};

// Context.Provider 역할을 수행하는 Component
// props.children 속성을 매개변수로 받고있다
// 이 Component 내에서 state들을 선언
// App.js 에서 AppContext.Provider 로 컴포넌트 들을 묶고
// 여기에 value 을 지정한 코드를
// AppContextProvider 라는 객체함수로 선언하기
const AppContextProvider = ({ children }) => {
  const [address, setAddress] = useState({
    a_name: "홍길동",
    a_tel: "010-111-1111",
    a_address: "서울특별시",
  });
  const [addrList, setAddrList] = useState([]);
  const [isEdit, setEdit] = useState(false);
  const props = {
    address,
    setAddress,
    addrList,
    setAddrList,
    isEdit,
    setEdit,
  };

  return (
    <>
      <AppContext.Provider value={props}>{children}</AppContext.Provider>
    </>
  );
}; // AppContextProvider() end
export default { AppContextProvider };
