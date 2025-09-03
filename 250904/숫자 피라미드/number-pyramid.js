const fs = require("fs");
let N = Number(fs.readFileSync(0).toString().trim());

let str = "";

for (let i = 1; i < N + 1; i++) {
    str = "";
    for (let j = 1; j < i + 1; j++) {
        str += i + " ";
    }
    console.log(str);
}