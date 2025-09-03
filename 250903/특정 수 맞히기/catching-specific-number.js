const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let idx = 0;

while (true) { 
    if (Number(input[idx]) > 25) {
        console.log("Lower");
    } else if (Number(input[idx]) == 25) {
        console.log("Good");
        break;
    } else {
        console.log("Higher");
    }
    idx++;
}