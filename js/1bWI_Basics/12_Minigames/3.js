let number = Math.floor(Math.random()*100);
let guess = 0;

while (guess !== number) {
guess = Number(prompt("Dein guess?"));
if (guess > number) {
    console.log("zu groß");
} else if (guess < number) {
    console.log("zu klein");
} else if (guess == number) {
    console.log("gewonnen, die zahl war " + number);
} else {
    console.log("invalid input");
}
}