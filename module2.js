//The second module should accept a number and convert it to a USD value.
//You can find some good implementations of this online.

function currencyNumber(number) {

return number.toLocaleString('en-EN', { style: 'currency', currency: 'USD' });
//Ryan -- function needs to return something
}

module.exports = currencyNumber;
