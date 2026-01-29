let grade = 100;
let attendance = 90;
let extraCredit = 5;

if (grade > 89 && (attendance > 89 || extraCredit > 4)) {
    console.log("Eligible for advanced exam.");
} else {
    console.log("Not eligible for advanced exam.");
}