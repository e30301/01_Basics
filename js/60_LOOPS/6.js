let number = Number(prompt("how many numbers "));
let i = 1;
let sum = 0;

while (i <= number) {
    sum += Number(prompt("number " + i + ": "));
    i++;
}

console.log("average=", sum / number);
