const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
});

const port = process.env.port || 3000;
console.log (`Serve is listen on port ${port}`);
app.listen(port);