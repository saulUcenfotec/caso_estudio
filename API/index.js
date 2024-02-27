const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://saul-rojas-898:1233456@caso.rt3unup.mongodb.net/?retryWrites=true&w=majority&appName=caso";
const app = express();
const port = 3000;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('hello world');
});
app.listen(port, () => {
    console.log(`Express backend running on localhost: ${port}`);
});