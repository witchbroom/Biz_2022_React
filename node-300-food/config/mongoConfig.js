const USERNAME = "aintbine";
const PASSWORD = "dn1212";
const mongoURL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.ywy91.mongodb.net/?retryWrites=true&w=majority`;

/*
mongoose 도구를 사용하여
NoSQL인 mongoDB에 DBMS Schema 방식으로 접근하기
*/
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const food = Schema({
  b_id: String,
  b_flag: Number,
  b_date: String,
  b_food: String,
  b_intake: Number,
  b_cal: String,
});

const food_model = mongoose.model("food", food);
export { mongoURL, food_model };
