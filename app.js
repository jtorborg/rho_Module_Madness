var http = require('http'); // node module built-in
var randomNumber = require('./module1');
var currencyNumber = require('./module2');
var accountBalance = require('./module3');

http.createServer(function (req, res) {
  // create a response header
  res.writeHead(200);
  // create a response body
  //res.write(randomNumber(100, 1000000)); //per Ryan (delete)
  res.write(currencyNumber(randomNumber(100, 1000000)));
  res.write(accountBalance.currencyNumber);
  res.write(accountBalance.finalResult());//Ryan helped turn this into function

  // send the response to the client
  res.end();
}).listen(3000); // accept connections on port 3000
