#!/bin/sh

./node_modules/.bin/concurrently "NODE_ENV=development ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --open --hot" "NODE_ENV=development ./node_modules/nodemon/bin/nodemon.js --verbose --watch server server/server.js";