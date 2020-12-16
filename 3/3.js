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
    
    var line = 1; // line in file
    var pos = 0; // pos on line
    var trees = 0; // trees encountered

    const array = getInput("./3/3.txt");
    //const array = getInput("./3/3s.txt");
    //const fasit = [".", "#", ".", "#", "#", ".", "#", "#", "#", "#"];

    var line = 0; // line in file
    var pos = 0; // pos on line
    var length = array[0].length - 1;
    var treesEncountered = 0;

    while (line < array.length - 1) {
        
        // If we are about to pass the right edge
        if (pos >= lineLength) {
            // If we are about to pass, reset pos to 0 + overflow
            pos = pos % lineLength;

        } else {
            pos = pos + stepPos;
        }

        
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
        line = line + stepLines;

    }

    return trees;
}

function day3b() {

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

    return treesEncountered;
}


module.exports = {
    day3: function () {

        return "First result: " + lookup(3,1) + "\nSecond result: " + "day3b()";
    }
}