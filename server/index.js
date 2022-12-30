const express = require('express')
const cors = require('cors')
const app = express()
var bodyParser = require('body-parser')
const port = 4000
const accountModel = require('./models/account.js')
const accountRouter = require('./routers/account.js')
const productRouter = require('./routers/product.js')
const customerRouter = require('./routers/customer.js')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))
app.use(bodyParser.json())

app.post('/register',(req, res, next) => {
  var username = req.body.username
  var password = req.body.password

  accountModel.findOne({
    username: username
  })
  .then(data =>{
    if(data){
      res.json('username đã tồn tại')
    } else {
      return accountModel.create({
        username: username,
        password: password 
      })
    }
  })
  .then(data => {
    res.json('Tạo tài khoản thành công')
  })
  .catch(err => {
    res.status(500).json('Tạo tài khoản thất bại')
  })
})

app.post('/login',(req, res, next) => {
  var username = req.body.username
  var password = req.body.password

  accountModel.findOne({
    username: username,
    password: password
  })
  .then(data => {
    if(data){
      res.json('Dang nhap thanh cong')
    } else {
      res.status(400).json('TK hoac MK sai')
    }
  })
  .catch(err => {
    res.status(500).json('Dang nhap that bai - server loi')
  })

})


app.use('/api/account', accountRouter)
app.use('/api/product', productRouter)
app.use('/api/customer', customerRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

