const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    'mongodb+srv://root:pt5ywt38txdymqs6bq2uygqdvmi4gsajb@cluster0.euzzj.mongodb.net/shop?retryWrites=true&w=majority'
  )
    .then((client) => {
      console.log('Connected!');
      _db = client.db();
      callback(client);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No databse found';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
