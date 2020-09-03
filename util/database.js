const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://root:ipyzdk7jjjc82e9xqpd5tiv98c7czjs2g@cluster0.euzzj.mongodb.net/test?retryWrites=true&w=majority')
  .then(client => {
    console.log('Connected!');
    callback(client);
  })
  .catch(err => {
    console.log(err);
  });
}

module.exports = mongoConnect;
