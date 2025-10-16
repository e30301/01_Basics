let randomNumber = Math.floor(Math.random() * 10); 
console.log(randomNumber);

if (randomNumber < 5) {
    console.log("smaller that 5");
} else if (randomNumber == 5) {
    console.log("number is 5");
} else {
    console.log("number bigger than 5");
}