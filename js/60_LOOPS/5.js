let a = prompt("a = ");
let b = prompt("b = ");
let sum = 0;

let start = Math.min(a, b);
let end = Math.max(a, b);

let i = start;

while (i <= end) {
    sum += i;
    i++;
}

console.log("Sum =", sum);
