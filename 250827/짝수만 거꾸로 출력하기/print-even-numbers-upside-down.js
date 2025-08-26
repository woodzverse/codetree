const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

let result = "";
for (let i = arr.length -1; i > 0; i--) {
    if (arr[i] % 2 == 0) {
        result += arr[i] + " ";
    }
}
console.log(result);