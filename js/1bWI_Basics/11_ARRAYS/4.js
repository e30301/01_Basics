let rand = 0;
let arr = [];
let i = 0;
let sum = 0;

while (i !== 10) {
    rand = Math.trunc(Math.random() * 10); 
    arr.push(rand);
    i++;
}

for (let index = 0; index < arr.length; index++) {
    sum = sum + arr[index];
}

console.log(sum / arr.length);