const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

let result = "";
for (i = 1; i < arr.length; i++) {
    result += arr[i] * arr[i] + " "
}
console.log(result);