let human = Number(prompt("schere(1)/stein(2)/papier(3)?"));
let computer = Math.trunc(Math.random()*3+1);

console.log(human);
console.log(computer);

if (human == 1) {
    console.log("Du: schere");
} else if (human == 2) {
    console.log("Du: stein");
} else if (human == 3) {
    console.log("Du: papier");
}

if (computer == 1) {
    console.log("Computer: Schere");
} else if (computer == 2) {
    console.log("Computer: stein");
} else if (computer == 3) {
    console.log("Computer: papier");
}

if (human == computer) {
    console.log("gleichstand");
} else if ((human == 1 && computer == 3) || (human == 2 && computer == 1) || (human == 3 && computer == 2)) {
    console.log("du hast gewonnen");
} else if ((human == 3 && computer == 1) || (human == 1 && computer == 2) || (human == 2 && computer == 3)) {
    console.log("verloren");
}