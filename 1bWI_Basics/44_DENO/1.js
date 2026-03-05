let pass = "verysecure";

const userinput = prompt("enter password: ");

if (userinput == pass) {
    console.log("access granted!");
} else {
    console.log("access denied!");
}