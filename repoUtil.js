'use strict';

const dotenv = require('dotenv').config();
var request = require('request');

function getRepoContributors(repoOwner, repoName, cb) {
  // API END POINT
  var url = "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";

  // AUTHENTICATION PARAMETER
  var options = {
    url: url,
    headers: {
      'User-Agent': 'Anderswag is the swaggiest'
    },
    auth: {
      bearer: process.env.TOKEN
    }
  };

  request(options, cb);
}

module.exports = getRepoContributors;