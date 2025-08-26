const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

for (let i = 0; i < 8; i++) {
    arr.push(((arr[i] + arr[i + 1]) % 10));
}

let result = "";
for (let i = 0; i < arr.length; i++) {
    result += arr[i] + " ";
}
console.log(result);