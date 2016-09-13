'use strict';

var request = require('request');
var fs = require('fs');


function download(data){

  if(!fs.existsSync('avatar')){
    fs.mkdirSync('avatar');
  }

  console.log(data);

  for (var i = 0; i < data.length; i++){
    console.log(data);
    var destination = fs.createWriteStream(`./avatar/${data[i].login}.jpg`);
    request(data[i].avatar_url).pipe(destination);
  }
}


module.exports = download;