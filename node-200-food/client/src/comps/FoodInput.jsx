import { useState, useEffect } from "react";
import FoodList from "./FoodList";

const apply = document.getElementById("apply");
const applybtn = document.getElementById("applybtn");
const input_box = document.querySelector(".input_box");

const BucketInput = () => {
  const [bucketList, setBuckList] = useState([]);

  const fetchFoodList = async () => {
    const response = await fetch("http://localhost:3000/food/list");
    const jsonFood = await response.json();
    setBuckList(jsonFood);
  };

  useEffect(() => {
    fetchFoodList();
  }, []);

  const postData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(food),
  };

  fetch("http://localhost:3000/bucket", postData)
    .then((res) => res.text())
    .then((result) => {
      if (result === "OK") {
        fetchFoodList();
      }
    });

  apply.addEventListener("click", () => {
    input_box.display.style = "block";
    applybtn.display.style = "block";
  });

  applybtn.addEventListener("click", (e) => {
    input_box.display.style = "none";
    applybtn.display.style = "none";

    const food = document.querySelector("input[name='food']");
    const date = document.querySelector("input[name='date']");
    const postData = {
      food: food.value,
      date: date.value,
    };
  });

  return (
    <>
      <FoodList foodList={foodList} />
    </>
  );
};

export default FoodInput;
