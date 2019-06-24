[![Build Status](https://travis-ci.org/briantam23/utilities-app.svg?branch=master)](https://travis-ci.org/briantam23/utilities-app)

# ⏱ Utilities App

A Single Page App created with React, Redux, LESS, AWS S3, D3 and Media Queries, along with multiple Testing libraries (Enzyme, Mocha, Chai, Sinon, SuperTest), and Continuous Integration using TravisCI.

## Login Credentials

* Username: `Brian`  | Password: `Briantam23@`
* Username: `Mike`   | Password: `Mike12#`
* Username: `Johnny` | Password: `Johnny34&` 

## Live Demo

Currently deployed to [Heroku](https://btam-utilities-app.herokuapp.com)!

## Setting up

This app requires a Ticketmaster API Key, S3 Bucket, AWS Access Key Id, AWS Secret Access Key, & Open Weather Map API Key, which must be set in `.env` or set as an environment variable on `TICKETMASTER_API_KEY`, `S3_BUCKET`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, & `OPEN_WEATHER_MAP_API_KEY`.

### Dependencies

* [React](https://reactjs.org)
* [Redux](https://redux.js.org)
* [LESS](http://lesscss.org)
* [AWS S3](https://aws.amazon.com/s3)
* [Enzyme](https://airbnb.io/enzyme)
* [PostgreSQL](https://www.postgresql.org)
* [D3](https://d3js.org)
* [Mocha](https://mochajs.org)
* [Express](https://expressjs.com)

### Installation

* `npm install` (or `yarn install`)
* `npm run start:dev`
* open up [localhost:8080](http://localhost:8080) in a web browser

The `run start:dev` command will run both the `webpack` process (in watch mode) to build your client-side Javascript files, and the Node process for your server with `nodemon`.

### Miscellaneous

* created Tests for React Components, the Redux Store, Routes, Models, and Functions, which can be run with `npm run test`