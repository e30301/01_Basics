let sentence = prompt("satz");
let words = sentence.split(" ");
let result = [];

function randomize(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

for (let index = 0; index < words.length; index++) {
    let word = words[index];

    if (word.length <= 2) {
        result.push(word);
        continue;
    }

    let first = word[0];
    let last = word[word.length - 1];
    let middle = word.slice(1, -1).split("");

    randomize(middle);

    let scrambled = first + middle.join("") + last;
    result.push(scrambled);
}

console.log(result.join(" "));
