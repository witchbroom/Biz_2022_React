import mongoose from "mongoose";
const USERNAME = "aintbine";
const PASSWORD = "dn1212";
const mongoURL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.ywy91.mongodb.net/?retryWrites=true&w=majority`;
const Schema = mongoose.Schema;

const food = Schema({
  f_id: String,
  f_date: String,
  f_name: String,
  f_eat: Number,
  f_cal: Number,
});

const food_model = mongoose.model("food", food);
export { mongoURL, food_model };
