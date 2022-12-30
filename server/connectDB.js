const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const account = new Schema({
  username: String,
  password: String
}, {
    collection: 'Account'
});

const AccountModel = mongoose.model('account', account);

AccountModel.create({
    username: 'ggg',
    password: 'matkhau'
})

/*
AccountModel.find({})
.then(function(data){
    console.log('data', data);
})
.catch(function(err){
    console.log('loi', err);
})
*/
