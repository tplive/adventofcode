
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



module.exports = {
    day4: function () {
        return day4();
    }
}