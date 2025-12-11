let bombs = [];
let i = 0;
let dead = false;
let bombsNearby = 0;
let bombTemp = 0;
let auswahl = 0;

function createBombs(number) {
    
    
    while (i < number) {
        bombTemp = Math.floor(Math.random()*25+1);
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
        console.log("bomben in der Nähe: " + bombsNearby);
    } else {
        console.log("verloren! bomben waren: " + bombs);
        exit;
    }
        
        
    
}

while (dead !== true) {
    auswahl = Number(prompt("> Feld "));
    nearbyBombs(auswahl);
}