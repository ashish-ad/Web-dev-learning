const express = require('express')
var path = require('path');

const app = express()
app.get("/welcome", function (req, res){
    res.sendFile(path. join(__dirname + '/Bootstrap.html'));
});

app.get("/",function(req,res){
    res.send("Hello Node Student");
});

app.get("/hello", function (req,res) {
    res.send("Hi!!");
    
});
app.listen(5000,function(){
    console.log("Hi! the server is running")
})