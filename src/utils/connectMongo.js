require("colors");
require("dotenv").config();

const { MongoClient, ServerApiVersion } = require('mongodb');

module.exports = async () =>{
    const uri = `mongodb+srv://shushu:${process.env.MONGO_PASSWORD}@twitchchat.bpdy360.mongodb.net/?retryWrites=true&w=majority&appName=TwitchChat`;

    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
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
            console.log("[DATA] Successfully connected to MongoDB!".cyan);
        } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
        }
    }

    run().catch(console.dir);
}


