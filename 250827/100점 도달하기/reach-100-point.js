const fs = require("fs");
let N = Number(fs.readFileSync(0).toString().trim());

let result = "";
for (i = N, i <= 100; i++) {
    if (i >= 90) {
        result += "A" + " ";
    } else if (i >= 80) {
        result += "B" + " ";
    } else if (i >= 70) {
        result += "C" + " ";
    } else if (i >= 60) {
        result += "D" + " ";
    } else {
        result += "F" + " ";
    }
}
console.log(result);