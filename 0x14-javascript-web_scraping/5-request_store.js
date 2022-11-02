#!/usr/bin/node
const request = require('request');
<<<<<<< HEAD
.const fs = require('fs');
=======
const fs = require('fs');
>>>>>>> 60f7ef8dab6c24490730d534863380e09782bb79
request.get(process.argv[2]).pipe(fs.createWriteStream(process.argv[3]));
