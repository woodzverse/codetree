const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let result = "";
for (let i = (input.length - 1); i >= 0; i--) {
    result += input[i];
}
console.log(result);