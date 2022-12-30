const express = require('express');
const router = express.Router();
const accountControllers = require('../controllers/account.js')

//lay du lieu
router.get('/', accountControllers.getAccount );

//lay du lieu 1 phan tu

/*   router.get('/:id', (req, res, next) => {
    var id = req.params.id
    accountModel.findById(id)
    .then(data => {
        res.json(data)
    })
    .catch(data => {
        res.status(500).json('Server loi')
    })
}) */

//them moi du lieu vao DB
router.post('/', accountControllers.addAccount );

//update du lieu DB
router.put('/:id', accountControllers.updateAccount);

//xoa du lieu DB
router.delete('/:id', accountControllers.deleteAccount);

module.exports = router