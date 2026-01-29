let num1 = prompt("Number1");
let num2 = prompt("Number2");
let calcType = prompt("Operation (+,-, *, /, **)");


if (calcType == "+") {
    console.log(num1 + num2);
}
if (calcType == "-") {
    console.log(num1 - num2);
}
if (calcType == "*") {
    console.log(num1 * num2);
}
if (calcType == "/") {
    console.log(num1 / num2);
}
if (calcType == "^") {
    console.log(num1 ** num2);
}