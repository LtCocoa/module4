const express = require('express');
const app = express();
const userRoute = require('./routes/user.js');
const logger = require('morgan');
const rfs = require('rotating-file-stream');
const path = require('path');
/*
app.use(function(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

app.use(function(req, res, next) {
    res.send('User');
});
*/
/*
app.use('/user', function(req, res, next) {
    res.send('User');
});

app.use('/', function(req, res, next) {
    res.send('Hello');
});
*/
/*
app.get('/user', function(req, res, next) {
    res.send('User')
})
*/

let option = {
    dotfiles: 'ignore',
}

let accessLogStream = rfs.createStream('access.log', {
    interval: '7d',
    path: path.join(__dirname, 'logs'),
});

app.set('x-powered-by', false);

app.use(express.static('public', option));

app.use(logger('tiny', {stream: accessLogStream}));

app.use('/user', userRoute);

app.use('/admin/:id', function(req, res, next) {
    if(req.params.id === '0') {
        return next('ID admin error');
    } else {
        res.send('Hello admin');
    }
});
//use - 4 аргумента = обработчик ошибок
app.use(function(err, req, res, next) {
    console.log(err);
    next(err);
});

app.use(function(err, req, res, next) {
    res.status(500);
    res.send('Error');
});

app.listen(8080);