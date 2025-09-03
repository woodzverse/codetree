const fs = require("fs");
let [A, B] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let result = "";
while (A <= B) {
    result += A + " ";
    if (A % 2 == 1) {
        A = A * 2;
    } else {
        A = A + 3;
    }
}
console.log(result);