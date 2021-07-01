const express = require("express");

const app = express();

app.get('/', (req,res,next) => {
    res.sendFile('C:/Users/ashis/Documents/Web Development [Full Stack-Verzeo]/css.HTML')
})
app.listen(3000);
