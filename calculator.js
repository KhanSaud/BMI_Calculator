const express = require("express");
const BodyParser = require("body-parser");
const app = express(); //express function
app.use(BodyParser.urlencoded({extended:true}));


app.get("/", function(req,res)
{
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res)
{
var weight = parseFloat(req.body.num1);
var height = parseFloat(req.body.num2);
var calc = weight /  (height*height);
res.send("<h2>Your BMI Calculation = " + calc);
});

app.listen(3000,function()
{
console.log("Server is up");
});