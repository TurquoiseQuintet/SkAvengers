'use strict';
var express = require('express');
var bodyParser = require('body-parser');

var logger = require('morgan');
var cors = require('cors');

var root = require('./routes/auth');
require('dotenv').config();

var app = express();
var expressJwt=require('express-jwt');
app.use(cors());

//decide if we need this
// var api=require('./routes/api');
var users = require('./routes/users');
var hunts = require('./routes/hunts');
var tasks = require('./routes/tasks');
var submit = require('./routes/submit');
var leaderboard = require('./routes/leaderboard');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function(req, res, next){
  console.log(req.url, req.method);
  next();
});
app.use('/', root);
// app.use('/users', users);
// app.use('/hunts', hunts);
// app.use('/tasks', tasks);
// app.use(function(req, res, next){
//   console.log(req.url, req.method);
//   next();
// });

app.use('/', root);
// app.use('/users', users);

// app.use('/hunts', hunts);
// app.use('/tasks', tasks);
app.use('/submit', submit);
app.use('/leaderboard', leaderboard);

// app.use('/', expressJwt({secret:process.env.SECRET}));

// app.use('/api', expressJwt({secret:process.env.SECRET}), api);

app.use('/users', expressJwt({secret:process.env.SECRET}), users);
app.use('/hunts', expressJwt({secret:process.env.SECRET}), hunts);
app.use('/tasks', expressJwt({secret:process.env.SECRET}), tasks );


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



app.use(function(err, req, res, next) {
    res.status(err.status || 500);
});
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Application is running on port:', port);
});
