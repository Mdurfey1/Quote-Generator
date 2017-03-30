var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

var request = require('request');

app.get('/redditQuote', function(req, res){
  var redditURL = `https://www.reddit.com/r/QuotesPorn/.json`
  request(redditURL, function (error, response, body) {
console.log('error:', error);
console.log('statusCode:', response && response.statusCode);
res.send(responde.body);
  })
});

app.listen(port, function () {

  console.log('Example app listening on port 3000!');
  
});