const express = require('express')
const app = express();
const PORT = 3000;

const friends = [
    {
        id: 0,
        name: 'Oluwafemi Arnold',
    },
    {
        id: 1,
        name: 'Bolu Akinwande'
    }
];

app.get('/friends', (req, res) => {
    res.json(friends);
});

app.get('/friends/:friendID', (req, res) =>{
    const friendID = Number(req.params.friendID)
    const friend = friends[friendID]
    if (friend){
        res.json(friend)
    }else{
        res.status(404).json({
            error: 'Friend does not exist'
        })
    }
})
app.get('/messages', (req, res) => {
    res.send('<ul>Hello Oluwafemi Olusesi Ogundare</ul>')
});

app.post('/messages', (req, res) =>{
    console.log('Updating messages...')
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})