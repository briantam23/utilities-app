const express = require('express');
const app = express();
const volleyball = require('volleyball');
const path = require('path');
const { User } = require('./db').models;
const jwt = require('jwt-simple');


// Logging middleware
app.use(volleyball);

// Body parsing middleware
app.use(require('body-parser').json());

// Static file-serving middleware
app.use('/public', express.static(path.join(__dirname, '../public')));

// Sends our index.html (the "single page" of our SPA)
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));


app.use((req, res, next) => {
    const token = req.headers.authorization;
    if(!token) return next();
    
    let id;
    try {
        id = jwt.decode(token, process.env.JWT_SECRET).id;
    }
    catch(ex) {
        return next({ status: 401 });
    }
    User.findByPk(id)
        .then(user => {
            req.user = user;
            next();
        })
        .catch(next);
})


// Routes that will be accessed via AJAX that are prepended 
// with /api so that they are isolated from our GET /* wildcard.
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/todos', require('./routes/todos'));


// Error catching endware
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send({ error: err.message });
})


module.exports = app;