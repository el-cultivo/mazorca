#! /usr/bin/env node

var ncp = require('ncp').ncp;

ncp('./node_modules/mazorca-core/core/mazorca-boilerplate/', './', function (err) {
 if (err) {
   return console.error(err);
 }
 console.log('done!');
});