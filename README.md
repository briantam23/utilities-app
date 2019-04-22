[![Build Status](https://travis-ci.org/briantam23/utilities-app.svg?branch=master)](https://travis-ci.org/briantam23/utilities-app)

# ⏱ Utilities App

A Single Page App created with React, Redux, LESS, Express, & AWS S3, along with multiple Testing libraries (Enzyme, Mocha, Chai, Sinon, SuperTest), and Continuous Integration using TravisCI.

## Login Credentials

* Username: `Brian`  | Password: `Briantam23@`
* Username: `Mike`   | Password: `Mike12#`
* Username: `Johnny` | Password: `Johnny34&` 

## Live Demo

This app is currently deployed to [Heroku](https://btam-utilities-app.herokuapp.com)!

## Setting up

This app requires a Ticketmaster API Key, S3 Bucket, AWS Access Key Id, & AWS Secret Access Key which must be set in `.env` or set as an environment variable on `TICKETMASTER_API_KEY`, `S3_BUCKET`, `AWS_ACCESS_KEY_ID`, & `AWS_SECRET_ACCESS_KEY`.

### Dependencies

* [React](https://reactjs.org)
* [Redux](https://redux.js.org)
* [LESS](http://lesscss.org)
* [AWS S3](https://aws.amazon.com/s3)
* [Enzyme](https://airbnb.io/enzyme)
* [PostgreSQL](https://www.postgresql.org)
* [Mocha](https://mochajs.org)
* [Express](https://expressjs.com)

### Installation

* `npm install` (or `yarn install`)
* `npm run start:dev`
* open up [localhost:3000](http://localhost:3000) in a web browser

The `run start:dev` command will run both the `webpack` process (in watch mode) to build your client-side javascript files, and the Node process for your server with `nodemon`.

### Miscellaneous

* created tests for React Components, the Redux Store, Routes, Models, and Functions, which can be run with `npm run test`