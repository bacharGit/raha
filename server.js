const express = require("express");
const path = require("path");

const app = express();
const port = 3500;

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, function () {
    console.log(`Server is listening on port ${port}`);
});
