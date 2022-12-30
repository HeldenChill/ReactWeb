const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/ProductionMove', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  type: String,
  code: String,
  error_times: Number,
  price: Number,
  status: String,
  position: String,
  produced_by: String,
  produced_time: String,
  sold_time: String,
  customer_id: String
}, {
    collection: 'product'
});

const productModel = mongoose.model('product', productSchema)

module.exports = productModel

