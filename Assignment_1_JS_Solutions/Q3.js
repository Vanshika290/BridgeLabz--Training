
// Q3: Monthly Expense Tracker
// Calculates total and average expenses

let expenses = [12000, 3000, 8000, 2500, 1500]; // food, travel, rent, bills, leisure
let total = expenses.reduce((a, b) => a + b, 0);
let avg = total / expenses.length;
let tax = total * 0.10;
let finalAmount = total + tax;

console.log(`Total: ₹${total.toFixed(2)}`);
console.log(`Average: ₹${avg.toFixed(2)}`);
console.log(`Final Amount (after 10% tax): ₹${finalAmount.toFixed(2)}`);
