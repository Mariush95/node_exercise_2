var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));

function greet() {

var arr = ["hei", "hello", "halla"];

var randomGreeting = arr[Math.floor(Math.random() * 3)]

return randomGreeting;
}

app.get('/gr/:name', function (req,res) {
    res.send(greet() + " " + req.params.name)
})


app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})
