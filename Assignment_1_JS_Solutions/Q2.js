
// Q2: Multi-Type Data Summary
// Program to show variable types in a formatted table

let userName = "Vanshika";
let age = 21;
let isStudent = true;
let hobbies = ["reading", "coding", "traveling"];
let user = { name: "Vanshika", course: "B.Tech" };
let score = null;
let futurePlan;

console.table([
  { Label: "String", Value: userName, Type: typeof userName },
  { Label: "Number", Value: age, Type: typeof age },
  { Label: "Boolean", Value: isStudent, Type: typeof isStudent },
  { Label: "Array", Value: hobbies, Type: Array.isArray(hobbies) ? "Array" : typeof hobbies },
  { Label: "Object", Value: user, Type: typeof user },
  { Label: "Null", Value: score, Type: typeof score },
  { Label: "Undefined", Value: futurePlan, Type: typeof futurePlan }
]);
