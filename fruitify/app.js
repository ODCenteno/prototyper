const { isAssertClause } = require('typescript');

require('dotenv').config();
const MongoClient = require("mongodb").MongoClient;

// Replace the uri string with your connection string.
const uri = process.env.FULL_STRING;
  // `mongodb+srv://${process.env.USER}:${process.env.MONGO_STRING}@${process.env.CLUSTER}/?retryWrites=true&w=majority`;
// const dbName = 'fruitsDB';

const client = new MongoClient(uri);

// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to Mongo server");

//   const db = client.db(dbName);

//   client.close();
// });


async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
