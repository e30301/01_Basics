let i = 5;
let human = 0;
let computer = 0;
let counterHuman = 0;
let counterComputer = 0;



while (i !== 0) {
    let command = prompt("würfeln? (y/n)");
    if (command == "y") {
        doDice()
        i--;
        console.log("verbleibende runden: " + i);
        console.log("Deine Punkte: " + counterHuman);
        console.log("Punkte Computer:" + counterComputer)
    } else if (command == "n") {
        exit;
    } else {
        console.log("ungültiger command!");
    }
}

function doDice() {
    human = Math.trunc(Math.random()*6+1);
    console.log("du: " + human);

    computer = Math.trunc(Math.random()*6+1);
    console.log("computer: " + computer);

    if (human > computer) {
        console.log("du hast gewonnen!");
        counterHuman++;

    } else if (computer > human) {
        console.log("du hast verloren :(");
        counterComputer++;
    } else {
        console.log("gleichstand!");
    }
}

if (i == 0) {
    if (counterComputer > counterHuman) {
        console.log("der computer hat gewonnen :(");
    } else if (counterHuman > counterComputer) {
        console.log("du hast gewonnen!");
    } else {
        console.log("gleichstand!");
    }
}