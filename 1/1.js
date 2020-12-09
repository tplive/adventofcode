var fs = require('fs');


var array = fs.readFileSync('./1/input.txt').toString().split("\n");
var array = array.map(function(i){
    return parseInt(i, 10);
})
var done = false;
var a;
var b;

while(done == false) {
    for(var j=0; j <= array.length; j++) {
        for(var k=0; k <= array.length; k++) {
            if(array[j] + array[k] == 2020) {
                a = array[j];
                b = array[k];
                done = true;
            }
        }
    }
}

var result =  "The magic numbers are " + a + " and " + b + "!\n" + "The product is " + a*b + "!";


module.exports = {
    day1: function() {
        return result;
    }
}

function dayone() {
    return "Hello from Day 1!";
}