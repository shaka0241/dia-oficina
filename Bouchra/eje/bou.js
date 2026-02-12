const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://boukhrisshayat3_db_user:password@cluster0.wp6wqui.mongodb.net/sword?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas");

    const db = client.db("Peliculas"); 
    const collection = db.collection("users");

    console.log("Collection:", collection);

  } catch (error) {
    console.error(error);
  }
}

connectDB();
