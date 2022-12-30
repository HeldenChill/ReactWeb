const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/product.js')

router.get('/',productControllers.getProduct);
router.post('/',productControllers.addProduct);
router.put('/:id',productControllers.updateProduct);
router.delete('/:id',productControllers.deleteProduct);