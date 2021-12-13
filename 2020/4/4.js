
function getInput(file) {
    var fs = require('fs');

    return fs.readFileSync(file).toString().split("\n\n");
}

Array.prototype.contains = function (obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}


function day4() {
    var data = getInput("./4/4.txt");
    var validCount = 0;

    data.forEach(d => {
        var d2 = d.replaceAll("\n", " ");
        var fields = d2.split(" ");

        if (fields.length >= 7) {
            // Missing 'cid' is OK, but no other
            for (var i = 0; i < fields.length; i++) {
                if (fields[i].substr(0, 3) == "cid") {
                    validCount++;
                    break;
                }
            }
        }
    });

    // More than 125
    // Less than 251 (all)

    return validCount;
}


module.exports = {
    day4: function () {
        return day4();
    }
}