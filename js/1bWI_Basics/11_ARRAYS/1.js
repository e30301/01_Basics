/*1bWI_Basics
Copyright(C) 2025 Isaak Vogel

This program is free software: you can redistribute it and / or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or any later version.

This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.If not, see < http://www.gnu.org/licenses/gpl.txt>.
*/


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