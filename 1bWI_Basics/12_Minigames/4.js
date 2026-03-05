let bombs = [];
let i = 0;
let dead = false;
let bombsNearby = 0;
let bombTemp = 0;
let auswahl = 0;

function createBombs(number) {
    
    
    while (i < number) {
        bombTemp = Math.trunc(Math.random()*25+1);
        if (!bombs.includes(bombTemp)) {
        bombs.push(bombTemp);
        i++
        } 
        
        //console.log(bombs);
    }
}
createBombs(3);


function nearbyBombs(feld) {
        bombsNearby = 0;
    if (!bombs.includes(feld)) { 
        if (bombs.includes(feld - 5)) {
            bombsNearby++;
        } 
        if (bombs.includes(feld + 5)) {
             bombsNearby++;
        }
        if (bombs.includes(feld + 1)) {
             bombsNearby++;
        } 
        if (bombs.includes(feld - 1)) {
             bombsNearby++;
        }
        if (bombs.includes(feld - 4)) {
            bombsNearby++;
        }
        if (bombs.includes(feld - 6)) {
            bombsNearby++;
        }
        if (bombs.includes(feld + 6)) {
            bombsNearby++;
        }
        if (bombs.includes(feld + 4)) {
            bombsNearby++;
        }
        console.log("bomben in der Nähe: " + bombsNearby);
    } else {
        console.log("verloren! bomben waren: " + bombs);
        exit;
    }
        
        
    
}

while (dead !== true) {
    auswahl = Number(prompt("> Feld "));

    console.log("01 02 03 04 05\n06 07 08 09 10\n11 12 13 14 15\n16 17 18 19 20\n21 22 23 24 25")
    console.log("")
    nearbyBombs(auswahl);
    console.log("")
}