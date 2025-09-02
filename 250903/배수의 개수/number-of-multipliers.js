const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let cnt3 = 0, cnt5 = 0;

for (let i = 0; i < input.length; i++) {
    let num = Number(input[i]);
    if (num % 3 == 0) {
        cnt3 += 1;
    }
    if (num % 5 == 0) {
        cnt5 += 1;
    }
}
console.log(cnt3, cnt5);