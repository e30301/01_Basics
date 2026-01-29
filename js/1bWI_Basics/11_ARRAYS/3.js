let i = 0;
let sum = 0;
let arr = [];
let rand = 0;

while (i !== 7) {
    rand = Math.trunc(Math.random() * 10); 
    arr.push(rand);
    i++;
}

for (let index = 0; index < arr.length; index++) {
    sum = sum + arr[index];
}

console.log(sum);
