var fs = require('fs');


var array = fs.readFileSync('./1/input.txt').toString().split("\n");
var array = array.map(function(i){
    return parseInt(i, 10);
})
var done = false;
var a;
var b;
var c;
var d;
var e;


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
done = false;
while(done == false) {
    for(var j=0; j <= array.length; j++) {
        for(var k=0; k <= array.length; k++) {
            for(var l=0; l<= array.length; l++) {
                if(array[j] + array[k] + array[l] == 2020) {
                    c = array[j];
                    d = array[k];
                    e = array[l];
                    done = true;
                }
            }
        }
    }
}

var result = "🏁 The magic numbers are " + a + " and " + b + "! 😅\n"
result += "The product is " + a*b + "!\n";
result += "And for the second part, the answer is " + c*d*e + "!";


module.exports = {
    day1: function() {
        return result;
    }
}

function dayone() {
    return "Hello from Day 1!";
}