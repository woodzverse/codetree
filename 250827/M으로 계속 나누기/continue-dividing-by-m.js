const fs = require("fs");
let a = fs.readFileSync(0).toString();
let arr = a.split(" ");

let n = arr[0];
let m = arr[1];
// Please write your code here.
while (n > 0) {
    console.log(n);
    n = parseInt(n / m); // Math.floor(n / m);
}