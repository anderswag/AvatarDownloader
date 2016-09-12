var request = require('request');

var owner = process.argv[2];
var repo = process.argv[3];
var avatarArray = [];
var url = "https://api.github.com/repos/" + owner + "/" + repo + "/contributors";

var options = {
  url: url,
  headers: {
    'User-Agent': 'Anderswag is the swaggiest'
  },
  auth: {
    bearer: 'a57eacca0add7c446829e57a9cb7ce499cedbd64'
  }
};

function getRepoContributors(repoOwner, repoName, cb) {
  request(options, cb);
}

getRepoContributors(owner, repo, function(err,response,body){
  var data = JSON.parse(body);
  for (var i = 0; i < data.length; i++){
    //console.log(data[i].avatar_url);
    avatarArray.push(data[i].avatar_url);
  }
  console.log(avatarArray);
});


