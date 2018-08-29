//es6 module
import sum from './sum'
// commonjs
const { sub } = require('./sub')
// AMD
require([
    './mul.js'
], function (mul) {
    console.log('mul(2,3) = ' + mul(2, 2))

});
console.log('sum(1,2) = ' + sum(1, 2))
console.log('sub(3,1) = ' + sub(3, 1))
