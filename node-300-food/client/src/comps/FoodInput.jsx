import { useState, useEffect } from "react";
import FoodList from "./FoodList";

const FoodInput = () => {
  const [foodList, setFoodList] = useState([]);

  const fetchFoodList = async () => {
    const response = await fetch("http://localhost:3000/food/list");
    const jsonFood = await response.json();
    setFoodList(jsonFood);
  };

  useEffect(() => {
    fetchFoodList();
  }, []);

  const onClick = () => {
    const f_name = document.querySelector(".f_name").value;
    const f_eat = document.querySelector(".f_eat").value;
    const f_cal = document.querySelector(".f_kalo").value;
    //    const f_name = document.querySelector("input[name='f_name']");
    //   const f_eat = document.querySelector("input[name='f_eat']");
    //    const f_cal = document.querySelector("input[name='f_cal']");

    const f_data = {
      f_date: "2022-07-06",
      f_name: f_name,
      f_eat: f_eat,
      f_cal: f_cal,
    };

    const postOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(f_data),
    };
    fetch("http://localhost:3000/food", postOption)
      .then((res) => res.text())
      .then((result) => {
        if (result === "OK") {
          fetchFoodList();
        }
      });
  };

  return (
    <>
      <input placeholder="식품명" className="f_name" />
      <input placeholder="섭취량" className="f_eat" />
      <input placeholder="칼로리" className="f_cal" />
      <button type="button" onClick={onClick}>
        전송하기
      </button>
      <FoodList foodList={foodList} />
    </>
  );
};

export default FoodInput;
