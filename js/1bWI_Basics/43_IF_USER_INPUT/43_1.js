let pass = "verysecure";

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Password?', name => {
  if (name == "verysecure ") {
    console.log("access granted");
  } else {
    console.log("access denied");
  }
  readline.close();
});
