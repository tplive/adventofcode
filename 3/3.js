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

function day3() {

    //const array = getInput("./3/3.txt");
    const array = getInput("./3/3s.txt");
    const fasit = [".", "#", ".", "#", "#", ".", "#", "#", "#", "#"];

    var line = 0; // line in file
    var pos = 0; // pos on line
    var length = array[0].length - 1;
    var treesEncountered = 0;

    while (line < array.length - 1) {

        pos = pos + 3;
        // If we are about to pass the right edge
        if (pos >= length) {
            // If we are about to pass, reset pos to 0 + overflow
            pos = pos % length;

        } else {
            pos = pos + 3;
        }
        line++;
        console.log(pos, line)
        // If there is a tree at that position, count it.
        if (array[line][pos] === "#") {
            treesEncountered++;
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

    return treesEncountered;
}


module.exports = {
    day3: function () {
        return day3();
    }
}