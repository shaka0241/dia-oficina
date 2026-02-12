require('dotenv').config({ quiet: true })
const { MongoClient, ServerApiVersion} = require('mongodb')

const uri = process.env.MONGODB_URI

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})

async function run() {

    try {
        await client.connect();
        await client.db("Movies").command({ping: 1})
        console.log("Tamos vimos de casualidad")
    } finally {
        await client.close();
    }
}
run().catch(console.dir)