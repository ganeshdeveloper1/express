const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
  var weight = parseFloat(req.body.num1)
  var height = parseFloat(req.body.num2)
  var result = weight / (height * height)
  res.send('Your BMI is:' + result)
})

app.listen(3000, function () {
  console.log('server is running on port 3000')
})
