
// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>
{
  if(err)
  {
    return console.log('Unable to connect mongodb');
  }
console.log('Connected to MongoDB server');

//  db.collection('Users').insertOne({

  //  name : 'vickee',
  //  age : 26,
  //  hometown : 'attur'
  // },
  //    (err, result) =>
  // {
  // if (err)
  //  {
  //  console.log('Unabe to Insert in users',err);
  //  }
  // console.log(result.ops[0]._id.getTimestamp());
   // });
//
 //  db.collection('Todos').insertOne({
 //  text  :'Something to do',
 //  completed  : false},
 //   (err, result) => { if (err) {
 //   return console.log('Unable to insert in Todo',err);
 //   }
 //   console.log(JSON.stringify(result.ops,undefined,2));
 //   });

//Insert new doc into Users (name,age,location)
db.close();

});
