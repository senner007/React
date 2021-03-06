const express = require('express');
const path = require("path");
const data = require("./data.js");
const app = express()
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.get('/comments', function (req, res) {

    const filteredData = data.filter(comment => {
        return comment.title.includes(req.query.title);
    })
 
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(filteredData));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));