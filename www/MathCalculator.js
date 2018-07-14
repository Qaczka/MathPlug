var exec = require('cordova/exec');

module.exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'MathCalculator', 'coolMethod', [arg0]);
};

//jak jest wiecej niz 1 to przed exports dodaj module.

module.exports.add = function (arg0, succes, error) {
    exec(succes, error, 'MathCalculator', 'add' , [arg0]);
}

module.exports.substract = function (arg0, succes, error) {
    exec(succes, error, 'MathCalculator', 'substract' , [arg0]);
}
