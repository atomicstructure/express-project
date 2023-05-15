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

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const nown = Date.now() - start;
    console.log(`${req.method} ${req.url} ${nown}ms`);

});

app.use(express.json());
app.post('/friends', (req, res) => {
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
});

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
});