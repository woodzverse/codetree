const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);

let resultA, resultB;

if (A < B) {
    resultA = 1;
} else {
    resultA = 0;
}

if (A == B) {
    resultB = 1;
} else {
    resultB = 0;
}

console.log(resultA, resultB);