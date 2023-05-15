const path = require('path')

function getMessages(req, res) {
  const picture = path.join(__dirname, '..', 'public', 'images','background-image.jpg')
  res.sendFile(picture)
}

function postMessages(req, res){
  console.log('Updating messages...')
}

module.exports = {
  getMessages,
  postMessages,
}
