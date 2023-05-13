const express = require('express')
const app = express();
const PORT = 3000;


app.get('/', (re, res) => {
    res.send({
        id: 1,
        name: 'Oluwafemi',
        age: 37,
        address: '23, Fagbeyiro Abayomi Street,Alakuko, Lagos'
    });
});

app.get('/messages', (req, res) => {
    res.send('<ul>Hello Oluwafemi Olusesi Ogundare</ul>')
});

app.post('/messages', (req, res) =>{
    console.log('Updating messages...')
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})