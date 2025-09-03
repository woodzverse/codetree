const fs = require("fs");
let num = Number(fs.readFileSync(0).toString().trim());

let str = "";
for (let i = 0; i < num; i++) {
    str = "";
    for (let j = num; j > i; j--) {
        str += "*" + " ";
    }
    console.log(str);
}