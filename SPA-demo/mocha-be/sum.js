#!/usr/bin/node
if(process.argv.length !== 4 ) {
    console.log('sum x y');
    process.exit(0);
}

var x = Number(process.argv[2]);
var y = Number(process.argv[3]);

const add = require('./calc')
console.log(`${x} + ${y} = ${add(x,y)}`);

