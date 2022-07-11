const express = require("express");
const port = 5000;
const getDatabase = require("./Config/config");
const mongodb = require("mongodb");

const app = express();
app.use(express.json());

// Read Data
app.get("/", async (req, res) => {
  const data = await getDatabase();
  const result = await data.find().toArray();
  res.status(200).send(result);
});

//Insert Data
app.post("/", async (req, res) => {
  const data = await getDatabase();
  const results = await data.insertOne(req.body);
  res.send(results);
});

// Update Data
app.put("/:name", async (req, res) => {
  console.log(req.params.name);
  const data = await getDatabase();
  const results = await data.updateOne(
    { name: req.params.name },
    { $set: req.body }
  );
  res.send(results);
});

// delete Data
app.delete("/:id", async (req, res) => {
  const data = await getDatabase();
  const results = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  res.send(results);
});

app.listen(port);
