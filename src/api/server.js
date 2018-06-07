"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World');
});
app.listen(3000, function () { return console.log("App listening on port: " + process.env.PORT); });
