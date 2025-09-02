fruit = ["apple", "banana", "grape", "blueberry", "orange"];

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let total = 0;

for (let i = 0; i < 5; i++) {
    if ((fruit[i][2] == input) || (fruit[i][3] == input)) {
        console.log(fruit[i]);
        total++;
    }
}
console.log(total);