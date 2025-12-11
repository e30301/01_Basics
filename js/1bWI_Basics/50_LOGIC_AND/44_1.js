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



let points = Math.trunc(Math.random() * 100);
 
if (points > 89) {
    console.log("Grade A");
 
} else if (points > 79) {
    console.log("Grade B");
 
} else if (points > 69) {
    console.log("Grade C");
 
} else if (points > 59) {
    console.log("Grade D");
 
} else {
    console.log("Grade F");
}