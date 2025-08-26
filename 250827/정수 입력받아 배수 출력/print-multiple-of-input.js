const fs = require("fs");
let N = Number(fs.readFileSync(0).toString().trim());
let answer = "";
for (let i = N; i <= N * 5; i += N) {
    answer += (i + " ");
}
console.log(answer);