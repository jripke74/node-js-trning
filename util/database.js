const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    'mongodb+srv://root:rp2er8srsz3rfjh2d493a32fj@cluster0.euzzj.mongodb.net/test?retryWrites=true&w=majority'
  )
    .then((client) => {
      console.log('Connected!');
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;
