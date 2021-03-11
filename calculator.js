const express = require('express')
/* const bodyParser = require('body-parser') */

const app = express ()
const port = 3000

/* app.use(bodyParser.urlencoded({extended}))
Body Parser is now depricated. You can get the same info just using express. */

app.use(express.urlencoded({}))

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
})

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/", function(req, res){
  var num1 = Number(req.body.n1)
  var num2 = Number(req.body.n2)
  var result = num1 + num2
  res.send("The result of the calculation is: " + result)
})

app.post("/bmicalculator", function(req, res){
  var height = parseFloat(req.body.height)
  var weight = parseFloat(req.body.weight)
  var bmi = weight / Math.pow(height, 2)
  bmi = bmi.toFixed(2)

  res.send("Your BMI is: " + bmi)  
})

app.listen(port, function(){
  console.log(`Server started on port:${port}`)
})