
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

// db.collection('Users').find({_id : new ObjectID('597ceff97a0d78de7345c9bf')}).toArray().then((docs)  =>
// {
// console.log('Todos ');
// console.log(JSON.stringify(docs, undefined, 2));
// },(err) =>
// {
//  console.log('UNABLE TO FETCH TODOS');
// });

 // db.collection('Todos').find().count().then((count)  =>
  // {
 // console.log(`Users count : ${count}`);
// },(err) =>
 // {
  // console.log('UNABLE TO FETCH TODOS',err);
 // });

db.collection('Users').find({name : 'vie'}).toArray().then((docs) =>
{
  console.log(JSON.stringify(docs, undefined, 2));
});
// db.close();

});
