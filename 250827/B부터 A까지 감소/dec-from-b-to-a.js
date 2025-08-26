const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);

let answer = "";
for (B; B >= A; B--) { // for (let i = b; i >= a; i--)
    answer += (B + " "); // answer += (i + " ");
}

console.log(answer);