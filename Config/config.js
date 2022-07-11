const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const databaseName = "shop";
const collectionName = "mobileData";

const getDatabase = async () => {
  const connectDb = await client.connect();
  const db = connectDb.db(databaseName);
  return db.collection(collectionName);
};

module.exports = getDatabase;
