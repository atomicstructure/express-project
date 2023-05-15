const friends = require('../models/friends.model')

function postFriends(req, res) {
  if (!req.body.name){
      return res.status(400).json({
          error: 'Missing friends name'
      })
  }
  const newFriend = {
      id: friends.length,
      name: req.body.name,
  };
  friends.push(newFriend);

  res.json(newFriend);
}

function getFriends(req, res) {
  res.json(friends);
}

function getFriendsId(req, res) {
  const friendID = Number(req.params.friendID)
  const friend = friends[friendID]
  if (friend){
      res.json(friend)
  }else{
      res.status(404).json({
          error: 'Friend does not exist'
      })
  }
}






module.exports = {
  getFriends,
  postFriends,
  getFriendsId
}