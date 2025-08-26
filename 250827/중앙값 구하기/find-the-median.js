const fs = require("fs");
let [A, B, C] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

// A, B인 경우 
if (A < B) {
    if (B < C) {
        console.log(B); // A, B, C
    } else if (A < C) {
        console.log(C); // A, C, B
    } else {
        console.log(A); // C, A, B
    }
}
 // B, A인 경우         
 else {
    if (A < C) {
        console.log(A); // B, A, C
    } else if (B < C) {
        console.log(C); // B, C, A
    } else {
        console.log(B); // C, B, A
    }
}