const express = require('express');
const router = express.Router();
const customerControllers = require('../controllers/customer.js')

//lay du lieu
router.get('/', customerControllers.getCustomer );

//them moi du lieu vao DB
router.post('/', customerControllers.addCustomer );

//update du lieu DB
router.put('/:id', customerControllers.updateCustomer);

//xoa du lieu DB
router.delete('/:id', customerControllers.deleteCustomer);

module.exports = router