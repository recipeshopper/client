const faunadb = require('faunadb');
require('dotenv').config();

const q = faunadb.query
const client = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET })

console.log(client);

function hello(event, context, callback) {
    callback(null, {
      statusCode: 200,
      body: "Hello, World"
    });
  };

module.exports = {
    handler: hello,
}