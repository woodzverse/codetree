const fs = require("fs");
let [start, end] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let count = 0
for (let i = start; i <= end; i ++) {
    let num = 0
    for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
            num += 1;
        }
    }

    if (num == 3) {
        count += 1;
    }
}
console.log(count);