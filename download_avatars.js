const dotenv = require('dotenv').config();
var request = require('request');
var fs = require('fs');

//var localPath = "/avatar";
var owner = process.argv[2];
var repo = process.argv[3];
//var avatarArray = [];
var url = "https://api.github.com/repos/" + owner + "/" + repo + "/contributors";

var options = {
  url: url,
  headers: {
    'User-Agent': 'Anderswag is the swaggiest'
  },
  auth: {
    bearer: process.env.TOKEN
  }
};



console.log(options);

function getRepoContributors(repoOwner, repoName, cb) {
  request(options, cb);
}

getRepoContributors(owner, repo, function(err,response,body){
  var data = JSON.parse(body);

  if (err) {
    throw err;
  }

  if(!fs.existsSync('avatar')){
    fs.mkdirSync('avatar');
  }

  for (var i = 0; i < data.length; i++){
    console.log(data);
    var destination = fs.createWriteStream(`./avatar/${data[i].login}.jpg`);
    request(data[i].avatar_url).pipe(destination);
  }
});


/*function downloadImages(arr){
  fs.writeFile()
}*/