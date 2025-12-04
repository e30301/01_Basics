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


let num1 = prompt("Number1");
let num2 = prompt("Number2");
let calcType = prompt("Operation (+,-, *, /, **)");

 
if (calcType == "+") {
    console.log(num1 + num2);
}
if (calcType == "-") {
    console.log(num1 - num2);
}
if (calcType == "*") {
    console.log(num1 * num2);
}
if (calcType == "/") {
    console.log(num1 / num2);
}
if (calcType == "^") {
    console.log(num1 ** num2);
}