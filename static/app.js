const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/'));
});

app.listen('8080', () => console.log("listening on port 8080"));