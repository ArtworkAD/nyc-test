// Load libraries
const koa = require('koa');
// Create app
const app = module.exports.app = new koa();

module.exports.testFunction = async ctx => {
  // empty
}

app.listen(process.env.PORT || 3000);
