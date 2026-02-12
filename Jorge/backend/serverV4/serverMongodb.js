require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.uri

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const run = async () => {
  try {
    await client.connect();
    await client.db("Cafeteria_JS").command({ ping: 1 });
    console.log("Pingueaste, felicidades!!!!!!!!!!!!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);