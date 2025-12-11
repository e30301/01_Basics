let bombs = [];
while (bombs.length < 3) {
    let n = Math.trunc(Math.random() * 25) + 1;
    if (!bombs.includes(n)) bombs.push(n);
}

let ded = false;

function bombsNearby(where) {
    let row = Math.trunc((where - 1) / 5);
    let col = (where - 1) % 5;
    let count = 0;
    for (let r = row - 1; r <= row + 1; r++) {
        for (let c = col - 1; c <= col + 1; c++) {
            if (r < 0 || r > 4 || c < 0 || c > 4) continue;
            let neighbor = r * 5 + c + 1;
            if (bombs.includes(neighbor)) count++;
        }
    }
    console.log("bomben in der nähe: ", count);
}

while (!ded) {
    console.log("01 02 03 04 05\n06 07 08 09 10\n11 12 13 14 15\n16 17 18 19 20\n21 22 23 24 25");
    let decicion = Number(prompt("feld:  (01–25):"));
    if (bombs.includes(decicion)) {
        console.log("verloren!");
        ded = true;
    } else {
        bombsNearby(decicion);
    }
}

console.log("bombern waren: ", bombs);
