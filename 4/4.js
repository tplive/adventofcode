
function day4() {
    return null;
}

function getInput(file) {
    var fs = require('fs');

    return fs.readFileSync(file).toString().split("\n");
}

function pad(number, character) {
    var res = "";
    for (i = 0; i < number; i++) {
        res += character;
    }
    return res;
}

function lookup(stepPos, stepLines) {
    
    var line = 0; // line in file
    var pos = 0; // pos on line
    var trees = 0; // trees encountered

    //const array = getInput("./3/3.txt");
    const array = getInput("./3/3s.txt");
    var length = array[0].length - 1;
        
    while (line < array.length - 1) {
        
        pos = pos + stepPos;
        // If we are about to pass the right edge
        if (pos >= length) {
            // If we are about to pass, reset pos to 0 + overflow
            pos = pos % length;

        } else {
            pos = pos + stepPos;
        }

        line + stepLines;
        console.log(pos, line)
        // If there is a tree at that position, count it.
        if (array[line][pos] === "#") {
            trees++;
            console.log(pad(pos, " ") + "#");
        } else {
            console.log(pad(pos, " ") + ".");
        }
        if (line == array.length) {
            console.log("Last line");
        } else {
            console.log("Next line");
        }


    }

    return trees;
}

function day4() {

    var treesEncountered = "";
    
    var tests = [
        [1,1],
        [3,1],
        [5,1],
        [7,1],
        [1,2]
    ]
    
    
    tests.forEach(test => {
        treesEncountered += "Test " + test[0] + "x" + test[1] + " = " + lookup(test[0], test[1]) + "\n";
    });
}

module.exports = {
    day4: function () {
        return day4();
    }
}