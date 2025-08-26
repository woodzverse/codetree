const fs = require("fs");
let word = fs.readFileSync(0).toString().trim();

let result = "";

result += word.slice(0, 1) + "a" + word.slice(2, word.length - 2) + "a" + word.slice(word.length - 1);
console.log(result);