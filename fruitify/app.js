require('dotenv').config();
const mongoose = require('mongoose');

//
// Connecting to DB using Mongoose example
//

mongoose.connect(process.MONGO_URL);

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
  name: 'platano',
  rating: 8,
  review: 'The best colors for fruits'
});

fruit.save().then(() => console.log('frutillas magicas'))












// +
// Connecting to mongoDB using MongoDriver
// +


// const MongoClient = require("mongodb").MongoClient;

// // Replace the uri string with your connection string.
// const uri = process.env.FULL_STRING;

// // const dbName = 'fruitsDB';

// const client = new MongoClient(uri);

// // client.connect(function(err) {
// //   assert.equal(null, err);
// //   console.log("Connected successfully to Mongo server");

// //   const db = client.db(dbName);

// //   client.close();
// // });


// async function run() {
//   try {
//     const database = client.db('sample_mflix');
//     const movies = database.collection('movies');

//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: 'Back to the Future' };
//     const movie = await movies.findOne(query);

//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
