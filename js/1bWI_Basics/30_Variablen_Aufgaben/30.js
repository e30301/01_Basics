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



// var banana = "Banane";
// var apple = "Apple";
var bananaPricePerKilo = 2.14;
var applePricePerKilo = 3.43;
 
var roundedResult1 = Math.round(0.34 * applePricePerKilo * 8);
var roundedResult2 = Math.round(0.22 * bananaPricePerKilo * 17);
var roundedResult3 = Math.round(applePricePerKilo * 1000);
var roundedResult4 = Math.round(bananaPricePerKilo * 1000);

console.log("8 Äpfel: " + roundedResult1);
console.log("17 Bananen: " + roundedResult2);
console.log("1000 Äpfel: " + roundedResult3);
console.log("1000 Bananen: " + roundedResult4);
