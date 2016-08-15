'use strict';
var express = require('express');
var bodyParser = require('body-parser');

var logger = require('morgan');
var cors= require('cors');

var root = require('./routes/index');
require('dotenv').config();

var app = express();
var expressJwt=require('express-jwt');
//decide if we need this
// var api=require('./routes/api');
var users = require('./routes/users');
var hunts = require('./routes/hunts');
var tasks = require('./routes/tasks');
app.use(cors());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(function(req, res, next){
  console.log(req.url, req.method);
  next();
});
// app.use('/', root);
app.use('/users', users);
app.use('/hunts', hunts);
app.use('/tasks', tasks);
// app.use('/', expressJwt({secret:process.env.SECRET}));
// app.use('/api', expressJwt({secret:process.env.SECRET}), api);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    console.log(err);
    res.status(err.status || 500).json(err);
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
});
var port = process.env.NODE_PORT || 3000;
app.listen(port, function(){
  console.log('Application is running on port:', port);
});
