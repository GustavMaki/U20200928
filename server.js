const express = require ('express');
const app= express();
var PORT = 8085;

app.use(express.static('public'));

app.get('/home', (req, res) => {
    res.send('index.html');
    res.end();
});

app.listen(PORT);

console.log('James Frih');
