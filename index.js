const express = require('express');
const app = express();
const path = require('path');
const songs = require('./app.js');


app.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname,'./home.html'));
})

app.get('/cds/', (req, res, next) => {
console.log("cds are working");
res.sendFile(path.join(__dirname,'./cds.html'));
})

app.get('/albums/:i', function (req, res, next) {
console.log("albums are working")
   const {i} = req.params;
   console.log(songs[i]);
   res.send(songs[i])
})

    app.listen(3000, function() {
        console.log('app is running on this port');
    })