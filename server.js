const express = require('express')
const friendsRouter = require('./routers/friends.router')
const messagesRouter = require('./routers/messages.router')
const app = express();
const path = require('path')
const PORT = 3000;



app.use((req, res, next) => {
    const start = Date.now();
    next();
    const after = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl} ${req.url} ${after}ms`);

});

app.use('/site', express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});