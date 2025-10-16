// var banana = "Banane";
// var apple = "Apple";
var bananaPricePerKilo = 2.14;
var applePricePerKilo = 3.43;

var roundedResult1 = Math.round(0.34 * applePricePerKilo * 8);
var roundedResult2 = Math.round(0.22 * bananaPricePerKilo * 17);
var roundedResult3 = Math.round(0.34 * applePricePerKilo * 1000);
var roundedResult4 = Math.round(0.22 * bananaPricePerKilo * 1000);

console.log("8 Äpfel: " + roundedResult1);
console.log("17 Bananen: " + roundedResult2);
console.log("1000 Äpfel: " + roundedResult3);
console.log("1000 Bananen: " + roundedResult4);
