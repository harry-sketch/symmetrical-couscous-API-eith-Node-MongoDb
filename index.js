const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/shop");

const ListSchema = new mongoose.Schema({
  name: String,
  category: String,
  model: String,
  price: Number,
});

// Insert data
const insertData = async () => {
  const ListModel = mongoose.model("lists", ListSchema);
  const data = await ListModel.insertMany([
    { name: "Vivo", category: "mobile", model: "V5", price: 500 },
    { name: "Apple", category: "mobile", model: "12", price: 800 },
  ]);

  console.log(data);
};

insertData();

// Read data
const readData = async () => {
  const data = mongoose.model("lists", ListSchema);
  const res = await data.find();
  console.log(res);
};
readData();

// Insert One data
const insertOneData = async () => {
  const ListModel = mongoose.model("lists", ListSchema);
  const data = new ListModel({
    name: "Samsung",
    category: "mobile",
    model: "S22",
    price: 1200,
  });

  const res = await data.save();
  console.log(res);
};

insertOneData();

// Update Data

const updateData = async () => {
  const data = mongoose.model("lists", ListSchema);
  const res = await data.updateOne(
    { name: "Samsung" },
    { $set: { price: 1000 } }
  );
  console.log(res);
};

updateData();

// Delete Data
const deleteData = async () => {
  const data = mongoose.model("lists", ListSchema);
  const res = await data.deleteOne({ name: "Vivo" });
  console.log(res);
};

deleteData();
