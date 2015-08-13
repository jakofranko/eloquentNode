var garble = require("./garble");

// Index 2 holdes the first actual command-line argument
var argument = process.argv[2];

console.log(garble(argument));