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
    
    const array = getInput("./3/3.txt");
    //const array = getInput("./3/3s.txt");
    //const fasit = [".", "#", ".", "#", "#", ".", "#", "#", "#", "#"];

    var line = 0; // line in file
    var pos = 0; // pos on line
    var lineLength = array[0].length;
    var trees = 0;

    while (line < array.length - 1) {
        
        pos = pos + stepPos;
        // If we are about to pass the right edge
        if (pos >= lineLength) {
            // If we are about to pass, reset pos to 0 + overflow
            pos = pos % lineLength;

        }
        line = line + stepLines;
        // debug console.log(pos, line)
        // If there is a tree at that position, count it.
        if (array[line][pos] === "#") {
            trees++;
            // debug console.log(pad(pos, " ") + "#");
        // debug }  else {
        //    console.log(pad(pos, " ") + ".");
        }
        // if (line == array.length) {
        //     console.log("Last line");
        // } else {
        //     console.log("Next line");
        // }

    }

    return trees;
}

function day3b() {

    var treesEncountered = "";
    var totalTrees = [];
    var tests = [
        [1,1],
        [3,1],
        [5,1],
        [7,1],
        [1,2]
    ]
    
    
    tests.forEach(test => {
        iter = lookup(test[0], test[1]);
        totalTrees.push(iter);

        treesEncountered += "Test " + test[0] + "x" + test[1] + " = " + iter + "\n";
    });

    var product = totalTrees.reduce( (x, y) =>  x * y );
    treesEncountered += "Total: " + product;

    return treesEncountered;
}


module.exports = {
    day3: function () {

        return "First result: " + lookup(3,1) + "\nSecond result: \n" + day3b();
    }
}