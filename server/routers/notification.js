const express = require('express');
const router = express.Router();
const notificationControllers = require('../controllers/notification.js')

router.get('/',notificationControllers.getNotification)

router.post('/',notificationControllers.addNotification)

router.delete('/:id', notificationControllers.deleteNotification);

module.exports = router