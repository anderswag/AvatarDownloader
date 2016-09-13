'use strict';

const dotenv = require('dotenv').config();
var request = require('request');

function getRepoContributors(repoOwner, repoName, cb) {
  var url = "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";

  var options = {
    url: url,
    headers: {
      'User-Agent': 'Anderswag is the swaggiest'
    },
    auth: {
      bearer: process.env.TOKEN
    }
  };

  console.log('Getting images from github');


  request(options, cb);
}

module.exports = getRepoContributors;