let temperature = prompt("Temperatur?");

if (temperature <= 5) {
    console.log("drinnen bleiben");
} else if (temperature > 5 && temperature <= 12) {
    console.log("warm anziehen");
} else if (temperature > 12 && temperature <= 26) {
    console.log("raus gehen");
} else if (temperature > 26 && temperature <= 30) {
    console.log("baden gehen");
} else if (temperature > 30) {
    console.log("kühlbox");
} else {
    console.log("invalid input");
}