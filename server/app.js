const express = require('express');
const app = express();
//const volleyball = require('volleyball');
const path = require('path');
const { User } = require('./db').models;
const jwt = require('jwt-simple');
const chalk = require('chalk');


// Logging middleware
//app.use(volleyball);

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
//app.use('/api/users', require('./routes/users'));
app.use('/api/todos', require('./routes/todos'));


// Error catching endware
app.use((err, req, res, next) => {
    // code to clean up DB error messages //

    // just in case
    if (!err.stack || !err.message) next(err);

    // clean up the trace to just relevant info
    const cleanTrace = err.stack
        .split('\n')
        .filter(line => {
            // comment out the next two lines for full (verbose) stack traces
            const projectFile = line.indexOf(__dirname) > -1; // omit built-in Node code
            const nodeModule = line.indexOf('node_modules') > -1; // omit npm modules
            return projectFile && !nodeModule;
        })
        .join('\n');

    // colorize and format the output
    console.log(chalk.magenta('      ' + err.message));
    console.log('    ' + chalk.gray(cleanTrace));
    
    // send back error status
    res.status(err.status || 500).end();
})


module.exports = app;