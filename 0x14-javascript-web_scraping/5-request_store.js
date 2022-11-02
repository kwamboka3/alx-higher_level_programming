#!/usr/bin/node
/*
 * Write a script that gets the contents of a webpage and stores it in a file.
 * The first argument is the URL to request
 * The second argument the file path to store the body response
 */
const request = require('request');
.const fs = require('fs');
request.get(process.argv[2]).pipe(fs.createWriteStream(process.argv[3]));
