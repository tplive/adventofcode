function getInput(file) {
    var fs = require('fs');

    return fs.readFileSync(file).toString().split("\n");
}
function day2() {
    
    var array = getInput("./2/2.txt")
    var validPasswords1 = 0;
    var validPasswords2 = 0;
    
   //var array = ["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"];

    occurrences1 = function (pass, lett) {
        var count = 0;
        for (var i = 0; i < pass.length; i++) {
            if (lett == pass[i]) {
                count++;
            }
        };
        return count;
    };

    occurrences2 = function (pass, lett, min, max) {
    
        var minMatch = pass[min-1] == lett;
        var maxMatch = pass[max-1] == lett;
        var valid = (minMatch && !maxMatch) || (!minMatch && maxMatch);
        // debug console.log(pass, lett, minmax, min, max, minMatch, maxMatch, valid);
        return valid
    }

    for (i in array) {
        var elements = array[i].split(" ");
        var range = elements[0]; // 2-5
        var letter = elements[1]; // z:
        letter = letter[0]; // z
        var password = elements[2]; // zzztvz
        var minmax = range.split("-");

        var min = parseInt(minmax[0]);
        var max = parseInt(minmax[1]);

        var numberOfmatches1 = occurrences1(password, letter);
        
        if (numberOfmatches1 >= min && numberOfmatches1 <= max) {
            validPasswords1++;
        }

        if (occurrences2(password, letter, min, max)) {
            validPasswords2++;
        }
    }

    return "Part 1; " + validPasswords1 + "\n" + "Part 2; " + validPasswords2;
}

function d2p2(password, letter) {


    return isValid;
}

module.exports = {
    day2: function () {
        return day2();
    }
}
