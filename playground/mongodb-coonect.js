//const MongoClient = require('mongodb').MongoClient;
// nowwe are goin to use  the object destructor

// var dipoo = {
//     name: " duipoo sahoo"
// }
//
//  var {name} = dipoo;
// console.log(name);

const {MongoClient , ObjectId} = require('mongodb')





MongoClient.connect("mongodb://localhost:27017/TodoApp2", (err, db) => {
    if (err) {
        return console.log("unable to connect to  == ", err);
    }

    console.log(" sucessfully connect to the server");


    // db.collection("Myapp").insertOne({
    //         name: " deepanjali sahoo",
    //         mother: " reen rani sahoo",
    //         father: "madhabachandra sahoo",
    //         profession: 'civil engineer',
    //         age: 22,
    //
    //     }, (err, result) => {
    //         if (err) {
    //             console.log(" ther is an error ");
    //         }
    //
    //         console.log(JSON.stringify(result.ops, undefined, 2));
    //
    //         console.log("=============================");
    //
    //
    //         console.log(result.ops[0]._id.getTimestamp());
    //         console.log(result.ops[0]._id);
    //     }
    // )

    db.close();
})