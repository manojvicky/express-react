var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var app = express()


app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
 
var todos= [
    {text: 'Manoj'},
    {text: 'Vicky'}
]

app.get('/', function (req, res) {
  res.json(todos);
})

app.post('/', function (req, res) {
    var todo = req.body
    console.log(todo)
    todos.push(todo)
    res.json(todos);
  })

app.delete('/',function(req, res){
    var URL = req.url;
    var index = req.body
    console.log(index);
    todos.splice(index.indexval, 1);
    res.json(todos);
})

app.listen(4000)


// var http = require('http');
// var fs = require('fs');
// var cors = require('cors')
// // http.use(cors());
// var todos= [
//     {text: 'First item in todo'},
//     {text: 'Second item in todo'}
// ]
// var server = http.createServer(function(req, res){
//     console.log(req.url)
//     if(req.url=="/"){
//         res.json(todos);
//     }
//     else{
        
//     res.end('Sent from the server');
//     }
// })

// server.listen(4000);