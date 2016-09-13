const dotenv = require('dotenv').config();
var request = require('request');
var fs = require('fs');

var owner = process.argv[2];
var repo = process.argv[3];

var getRepoContributors = require('./repoUtil');

var download = require('./downloadUtil');

getRepoContributors(owner, repo, function(err,response,body){
  var data = JSON.parse(body);

  if (err) {
    throw err;
  }
  download(data);

});
