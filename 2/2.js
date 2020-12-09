function day2() {
    var fs = require('fs');

    var array = fs.readFileSync('./2/2.txt').toString().split("\n");
    var validPasswords = 0;
    //var array = ["2-5 z: zzztvz", "1-3 g fdsgyt"];

    occurrences = function (pass, lett) {
        var count = 0;
        for (var i = 0; i < pass.length; i++) {
            if (lett == pass[i]) {
                count++;
            }
        };
        return count;
    };
    for (i in array) {
        var elements = array[i].split(" ");
        var range = elements[0]; // 2-5
        var letter = elements[1]; // z:
        letter = letter[0]; // z
        var password = elements[2]; // zzztvz
        var minmax = range.split("-");

        var min = parseInt(minmax[0]);
        var max = parseInt(minmax[1]);

        var numberOfmatches = occurrences(password, letter);

        if (numberOfmatches >= min && numberOfmatches <= max) {
            validPasswords++;
        }
    }
    return "Part 1; " + validPasswords;
}

function d2p2() {
    
}

module.exports = {
    day2: function () {
        return day2();
    }
}
