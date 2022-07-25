const PASSWORD = "dn1212";
const mongoURL =
  "mongodb+srv://aintbine:dn1212@cluster0.ywy91.mongodb.net/?retryWrites=true&w=majority";

import mongoose from "mongoose";
const Schema = mongoose.Schema;
const foodSchema = {
  d_id: String,
  d_date: String,
  d_food: String,
  d_qty: Number,
  d_cal: Number,
};
const food_model = mongoose.model("food", foodSchema);

export { mongoURL, food_model };
