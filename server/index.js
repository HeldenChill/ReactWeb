const express = require('express')
const cors = require('cors')
const app = express()
var bodyParser = require('body-parser')
const port = 4000
const accountModel = require('./models/account.js')
const accountRouter = require('./routers/account.js')
const productRouter = require('./routers/product.js')
const customerRouter = require('./routers/customer.js')
const notificationRouter = require('./routers/notification.js')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))
app.use(bodyParser.json())


app.use('/api/account', accountRouter)
app.use('/api/product', productRouter)
app.use('/api/customer', customerRouter)
app.use('/api/notification',notificationRouter)
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

