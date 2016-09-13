'use strict';

var request = require('request');
var fs = require('fs');

function download(data){

  if (!fs.existsSync('avatar')){
    fs.mkdirSync('avatar');
  }

  for (var i = 0; i < data.length; i++){
    var destination = fs.createWriteStream(`./avatar/${data[i].login}.jpg`);
    request(data[i].avatar_url).pipe(destination);
    console.log(`downloaded    -> ${data[i].login}.jpg`);
  }

  console.log('Download Complete, have a good day')
}

module.exports = download;