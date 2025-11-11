
// Q4: Academic Performance Evaluator

let marks = [80, 90, 85, 70, 88];
let avg = marks.reduce((a, b) => a + b, 0) / marks.length;
let percent = avg;

if (marks.some(m => m < 35)) {
    console.log("Detained (one or more subjects below 35)");
} else if (percent >= 85) {
    console.log("Promoted with Distinction");
} else if (percent >= 50) {
    console.log("Promoted");
} else {
    console.log("Detained");
}
