const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(/\s+/);

let A_Math = Number(input[0]);
let A_English = Number(input[1]);
let B_Math = Number(input[2]);
let B_English = Number(input[3]);

if ((A_Math > B_Math) && (A_English > B_English)) {
    console.log(1);
} else {
    console.log(0);
}