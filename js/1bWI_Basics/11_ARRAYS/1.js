let arr = [4, 1, 2, 3]
let sum = 0;
arr.push(17);
arr.push(199);
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}

for (let index = 0; index < arr.length; index++) {
    sum = sum + arr[index]
}

console.log(sum);
console.log(sum / 6);