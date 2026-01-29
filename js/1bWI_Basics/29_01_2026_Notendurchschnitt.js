let arr = [];
let input = "";
let sum = 0;

console.log("Noten eingeben (s zum stoppen)");

while (true) {
    input = prompt("Note:");
    if (input === "s") {
        break;
    }

    let value = Number(input);
    if (value != "NaN") {
        if(value >= 1 && value <= 5) {
        arr.push(value);
        } else {
            console.log("keine gültige note")
        }
    }
}

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(sum / arr.length);
