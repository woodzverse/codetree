const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
console.log(`${b} ${a}`) // 값 교체: [a, b] = [b, a];