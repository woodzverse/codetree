const fs = require("fs");
let word = fs.readFileSync(0).toString().trim().split(" ");

if (word[0].length == word[1].length) {
    console.log("same");
} else{
    if (word[0].length > word[1].length) {
        console.log(word[0], word[0].length);
    } else {
        console.log(word[1], word[1].length)
    }
}