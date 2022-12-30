const express = require('express');
const accountModel = require('../models/account.js');

class AccountControllers {
    getAccount(req, res) {
        accountModel.find({})
        .then(data => {
            res.header("Access-Control-Allow-Origin", "*");
            res.json(data)
        })
        .catch(data => {
            res.status(500).json('Server loi')
        })
    };
    
    addAccount (req, res) {
        var username = req.body.username
        var password = req.body.password
        var type = req.body.type
        var position = req.body.position
    
        accountModel.create({
            username : username,
            password : password,
            type: type,
            position: position
        })
        .then(data => {
            res.header("Access-Control-Allow-Origin", "*");
            res.json(data)
        })
        .catch(err => {
            res.status(500).json('Server loi')
        })
    };
    
    updateAccount(req, res) {
        var id = req.params.id
        var newUsername = req.body.username
        var newPassword = req.body.password
        var newType = req.body.type
        var newPosition = req.body.position
    
        accountModel.findByIdAndUpdate(id, { 
            username: newUsername,   
            password : newPassword,
            type: newType,
            position: newPosition
        })
        .then(data => {
            res.header("Access-Control-Allow-Origin", "*");
            res.json("update data thanh cong")
        })
        .catch(err => {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(500).json('Server loi')
        })
    };
    
    deleteAccount (req, res) {
        var id = req.params.id
        accountModel.deleteOne({
            _id: id
        })
        .then(data => {
            res.header("Access-Control-Allow-Origin", "*");
            res.json('xoa thanh cong ')
        })
        .catch(err => {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(500).json('Server loi')
        })
    }
}

module.exports = new AccountControllers;

