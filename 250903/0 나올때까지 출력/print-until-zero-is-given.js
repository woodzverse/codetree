const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let idx = 0;

while (true) {
    let n = Number(input[idx]);
    if (n == 0) {
        break;
    }
    console.log(n);
    idx++;
}