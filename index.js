const express = require("express");
const port = 5000;
const getDatabase = require("./Config/config");

const app = express();

app.get("/", async (req, res) => {
  const data = await getDatabase();
  const result = await data.find().toArray();
  res.status(200).send(result);
});

app.listen(port);
