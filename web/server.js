const express = require('express');
const app = express();


app.get('/test', (req, res) => {
    console.log('yoooo im in this bitch');
});

app.listen('5000', () => console.log("listening on port 5000"));