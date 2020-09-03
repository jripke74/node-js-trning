const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://root:ipyzdk7jjjc82e9xqpd5tiv98c7czjs2g@cluster0.euzzj.mongodb.net/shop2?retryWrites=true&w=majority')
  .then(client => {
    console.log('Connected!');
    _db = client.db();
    callback();
  })
  .catch(err => {
    console.log(err);
    throw err;
  });
}

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
