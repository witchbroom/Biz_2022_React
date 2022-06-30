import End from "./End";
import End2 from "./End2";

const Sub = (props) => {
  return (
    <div>
      <h2>나는 Sub Comp입니다</h2>
      <div>{props.name}</div>
      <End name={props.name} />
    </div>
  );
};

export default Sub;
