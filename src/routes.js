const express = require('express');
const routes = express.Router();
const GetUser = require('./controllers/GetRepo');

routes.get('/api/repos', GetUser.userRepo);

module.exports = routes;