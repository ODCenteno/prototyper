require('dotenv').config();
const mongoose = require('mongoose');

//
// Connecting to DB using Mongoose example
//
console.log(process.env.MONGO_URL);
mongoose.connect("mongodb://root:root123@localhost:27017/?retryWrites=true&writeConcern=majority");

const peopleSchema = new mongoose.Schema({
  'name': String,
  'age': Number,
  'details': String
});

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
const Person = mongoose.model('Person', peopleSchema);

const person = new Person({
  'name': 'Daniel',
  'age': 36,
  'details': 'virgo'
});

person.save().then(() => console.log('cacheton bombacho'))

mongoose.connection.close();












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
