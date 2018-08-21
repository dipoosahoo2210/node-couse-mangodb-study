//const MongoClient = require('mongodb').MongoClient;
// nowwe are goin to use  the object destructor

// var dipoo = {
//     name: " duipoo sahoo"
// }
//
//  var {name} = dipoo;
// console.log(name);

const {MongoClient, ObjectId} = require('mongodb')


MongoClient.connect("mongodb://localhost:27017/TodoApp2", (err, db) => {
    if (err) {
        return console.log("unable to connect to  == ", err);
    }

    console.log(" sucessfully connect to the server");

    db.collection('Myapp').find({
        _id : new ObjectId("5b7b9f1f148d31704953b213"),
    }).toArray().then((docs)=>{

        console.log("Myapp");
        console.log(JSON.stringify(docs ,undefined , 2));

    },(err)=>{
        console.log("some errror occur == ",err)
    })
    db.collection('Myapp').find().count().then((count)=>{

        console.log("Myapp");
        console.log(`doument cout is ==  ${count}`);

    },(err)=>{
        console.log("some errror occur == ",err)
    })



   // db.close();
})