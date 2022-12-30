const express = require('express')
const notificationModel = require('../models/notification.js');

class NotificationControllers {
    getNotification (req, res){
        notificationModel.find({})
        .then(data => {
            res.json(data)
        })
        .catch(data => {
            res.status(500).json('Server loi')
        })
    };

    addNotification (req, res ){
        var type = req.body.type
        var title = req.body.title
        var content = req.body.content
        var src_position = req.body.src_position
        var des_position = req.body.des_position

        notificationModel.create({
            type: type,
            tittle: title,
            content: content,
            src_position: src_position,
            des_position: des_position
        })
        .then(data => {
            res.json('them du lieu thanh cong')
        })
        .catch(err => {
            res.status(500).json('Server loi')
        }) 
    }

    deleteNotification (req, res){
        var id = req.params.id
        notificationModel.deleteOne({
            _id: id
        })
        .then(data => {
            res.json('xoa thanh cong ')
        })
        .catch(err => {
            res.status(500).json('Server loi')
        })
    }
}

module.exports = new NotificationControllers;