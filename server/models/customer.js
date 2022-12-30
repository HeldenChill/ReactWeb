const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/ProductionMove', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: String,
    age: Number,
    gender: String,
    address: String,
    telephone: String,
    buy_products: String,
    stores: String
}, {
    collection: 'customer'
});

const customerModel = mongoose.model('customer', customerSchema)

module.exports = customerModel

