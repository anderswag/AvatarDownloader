const dotenv = require('dotenv').config();
var request = require('request');
var fs = require('fs');

//CLI PARAMETERS
var owner = process.argv[2];
var repo = process.argv[3];

//Checks if we have a .env file
if (!fs.existsSync('./.env')){
 throw '.env file does not exist';
}

//FUNCTIONS
var getRepoContributors = require('./repoUtil');
var download = require('./downloadUtil');

// Checks that the number of arguments is correct
if (process.argv.length === 4){

  getRepoContributors(owner, repo, function(err,response,body){
  var data = JSON.parse(body);
  // CHECKS if .env file has the right credentials
  if (response.statusCode === 401){
    throw 'Incorret credentials in .env file';
  }
  // Checks if the OWNER and REPOSITORY exist
  if (response.statusCode === 404){
    throw `The owner ${owner} with repository ${repo} does not exist`;
  }

  if (err) {
    throw err;
  }

  download(data);

  });

} else {
  console.log("Please enter the proper number of parameters");
}


