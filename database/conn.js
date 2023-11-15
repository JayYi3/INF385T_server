const { MongoClient, ServerApiVersion } = require('mongodb');
// SW4L13Nq7LXUfpBb
const uri = "mongodb+srv://zijianyi66:SW4L13Nq7LXUfpBb@cluster0.im9qc6t.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
var dataBase;

module.exports = {

connectToServer: async function () {
    client.connect();
    // Send a ping to confirm a successful connection
    
    client.db("admin").command({ ping: 1 });
    
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
    dataBase = client.db('eCommerce');   
    },

getDb: function (){
    return dataBase;
  },
};

  