// Load libraries
const koa = require('koa');

// Load api
const api = require('./app/api.js');
const options = require('./app/options.js');

// Create app
const app = module.exports.app = new koa();

module.exports.testFunction = async ctx => {
  // empty
}

app.listen(process.env.PORT || 3000);
