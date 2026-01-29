let rand = 0;
let arr = [];
let i = 0;
let prev = 0;

while (i !== 10) {
    rand = Math.trunc(Math.random() * 10); 
    arr.push(rand);
    i++;
}

for (let index = 0; index < arr.length; index++) {

    if (arr[index] > prev) {
        prev = arr[index];

    } else {
        
    }
    
}

console.log(prev);
