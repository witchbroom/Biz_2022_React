import backgroundImage from "./images/image.jpg";
import "./App.css";
import "./w3css.css";
import BucketMain from "./components/BucketMain";

// css 스타일을 JS 코드로 구현하기
const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  bakcgroundRepeat: "no-repeat",
  backgroundAttachment: "scroll",
  backgroundSize: "100% 100%",
};

function App() {
  return (
    <div className="App">
      <header className="App-header" style={backgroundStyle}></header>
      <BucketMain />
    </div>
  );
}

export default App;
