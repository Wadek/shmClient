var express = require('express');
var path = (require('path'));

var app = express();
app.set('port', (process.env.PORT || 3000));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
var db = mongoose.connection;
mongoose.Promise = global.Promise;
