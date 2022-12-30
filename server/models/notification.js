const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/ProductionMove', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  type: String,
  tittle: String,
  content: String,
  src_position: String,
  des_position: String
}, {
    collection: 'notification'
});

const notificationModel = mongoose.model('notification', notificationSchema)

module.exports = notificationModel