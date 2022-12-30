const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/ProductionMove', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const accountSchema = new Schema({
  username: String,
  password: String,
  type: String,
  position: String
}, {
    collection: 'account'
});

const accountModel = mongoose.model('account', accountSchema)

module.exports = accountModel

