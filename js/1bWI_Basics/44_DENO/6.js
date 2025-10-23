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


let choice = prompt("Getränk? (1 = Cola | 2 = Wasser | 3 = Bier | 4 = Tee |");
 
if (choice == 1) {
    console.log("Cola gekauft"); 
} else if (choice == 2) {
    console.log("Wasser gekauft");
} else if (choice == 3) {
    console.log("Bier gekauft");
} else if (choice == 4) {
    console.log("Tee gekauft");
} else {
    console.log("invalid choice");
}