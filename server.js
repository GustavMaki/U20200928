const express = require ('express');
const app=  express();
var PORT = process.env.PORT || 8085;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('index.html');
    res.end();
});

app.listen(PORT);

console.log('James Frih');
