/**
 * Created by PCAPPS50 on 11/28/2016.
 */


var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
})

app.listen(9003, function () {
    console.log('Node app listening on port 9003...!!!');
})