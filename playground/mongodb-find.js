// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server.");
    }
    console.log("Connected to MongoDB server.");

    const db = client.db("TodoApp");    // get database reference

    // db.collection('Todos').find({
    //     _id: new ObjectID("5a971dc9cde84767fb0e1eba")
    // }).toArray().then((docs) => {
    //     console.log("Todos: ", JSON.stringify(docs, undefined, 3));
    // }, (err) => {
    //     console.log("Unable to fetch todos: ", err);
    // });

    db.collection('Users').find({
        name: "Mike"
    }).toArray().then((docs) => {
        console.log("Name Mike: ", JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Unable to fetch todos: ", err);
    });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log("count: ", count);
    // }, (err) => {
    //     console.log("Unable to count: ", err);
    // });

    // db.close();
}); 