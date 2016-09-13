'use strict';

var request = require('request');
var fs = require('fs');

function download(data) {
  // Checks if folder exists
  if (!fs.existsSync('./avatars')) {
    fs.mkdirSync('./avatars');
  }
  // Populates folder with images

  for (var i = 0; i < data.length; i++) {
    var destination = fs.createWriteStream(`./avatars/${data[i].login}.png`);
    request(data[i].avatar_url).pipe(destination);
    console.log(`downloaded    -> ${data[i].login}.png`);
  }

  console.log('Download Complete, have a good day');

}

module.exports = download;