const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);

for (let i = 1; i <= n; i++) {
    let sum = 0;
    let x = input[i].split(" ");
    let a = Number(x[0]);
    let b = Number(x[1]);
    for (let j = a; j <= b; j++) {
        if (j % 2 == 0) {
            sum += j;
        }
    }
    console.log(sum);
}