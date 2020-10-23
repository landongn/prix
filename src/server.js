import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
const http = require("http");

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
const io = require('socket.io');
const files = sirv('static', {dev});
const server = http.createServer({port: PORT});


exports.default = polka({server})
  .use(compression({threshold: 0}), files, sapper.middleware())
  .listen(PORT, (err) => {
  if (err) console.log('error', err);
});

io(server).on("connection", socket => {
  console.log("socket connection made");
  // add your handlers here.

})