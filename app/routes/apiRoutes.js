var friendData = require("../data/friends");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });


  app.post("/api/friends", function(req, res) {
    
    var selFriendScore = 50;
    var index = 50;

    for(var i = 0; i < friendData.length; i ++){
      if(returnScore(friendData[i],req.body)< selFriendScore);{
        selFriendScore = returnScore(friendData[i],req.body);
        index = i;
      } 
    }

    friendData.push(req.body);

    res.json(friendData[index]);
  });

};


function returnScore(friend, me){
  var score = 0;
  for(var j = 0; j < 10; j ++){
    score = score +  Math.abs(me.scores[j]-friend.scores[j]);
  }
  return score;
}