//The third module should require the other two modules (i.e. Module One and Module Two).
var randomNumber = require('./module1');
var currencyNumber = require('./module2');

//It should have two function exports:

//The first function export should return the result of the first module being passed into
//the second module.

exports.currencyNumber = currencyNumber(randomNumber(100, 1000000));

//The second function export should return the text “Account balance: \n”.
exports.finalResult = function () {return "Account Balance: \n"};
