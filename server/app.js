const express = require('express');
const app = express();
const path = require('path');
const { User } = require('./db').models;
const jwt = require('jwt-simple');


app.use(require('body-parser').json());
app.use('/public', express.static(path.join(__dirname, '../public')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));


app.use((req, res, next) => {
    const token = req.headers.authorization;
    if(!token) {
        return next();
    }
    let id;
    try {
        id = jwt.decode(token, process.env.JWT_SECRET).id;
    }
    catch(ex) {
        return next({ status: 401 });
    }
    User.findById(id)
        .then(user => {
            req.user = user;
            next();
        })
        .catch(next);
    
})

app.use('/api/users', require('./routes/users'));

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send({ error: err.message });
})


module.exports = app;