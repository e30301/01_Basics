let age = prompt("Age:");

if (age < 25) {
    console.log("jung");
} else if (age < 50 && age >= 25) {
    console.log("mittelalt"); 
} else if (age >= 50) {
    console.log("alt");
} else {
    console.log("invalid input");
}