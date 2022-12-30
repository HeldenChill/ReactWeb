const express = require('express');
const router = express.Router()

router.get('/',(req, res) => {
    res.json('router')
    res.send("ROUTER SUCCESS")
})

router.post('/',(req, res) => {
    res.json('router post')
})

router.get('/1',(req, res) => {
    res.json('router ---> 1 ')
})

module.exports = router