const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',(req,res) =>{
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

router.get('/home',(req,res) =>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
  });

router.get('/about',  (req,res)=>{
  res.sendFile(path.join(__dirname+'/public/about.html'));
});

app.use('/', router);
app.listen(process.env.port || 8085);

console.log('Running at Port 8085');
