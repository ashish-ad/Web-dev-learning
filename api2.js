const express = require('express')
const bodyParser = require('body-parser');

const app = express()
//using a middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.post('/newuser', function(req, res){
  console.log(req.body);
  res.send("The POST request is completed.")
})

app.get('/currentdir', function(req, res){
  console.log(__dirname);
  res.send("The current directory will be send in the next call." + __dirname)
})

app.get('/photo', (req, res)=>  res.sendFile(__dirname + '/Nixon.jpg'))

app.get('/welcome/:data', (req, res)=>{
  let name = req.params.data;
  console.log(name);
  res.send("Welcome " + name);
});

app.get('/hello', function(req, res){
  res.send("Hi");
})
 
app.get('/', function (req, res) {
  res.send('Hello Node Students')
})

app.get('/students', function (req, res) {
    res.send('Hello Students')
  })


 
app.listen(5000, function(){
  console.log("Hi! The server is running on PORT 5000.")
})
