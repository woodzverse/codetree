const fs = require("fs");
N = Number(fs.readFileSync(0).toString().trim());
console.log(`Your score is ${N} point.`)