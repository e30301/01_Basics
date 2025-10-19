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



let grade = 100;
let attendance = 90;
let extraCredit = 5;

if (grade > 89 && (attendance > 89 || extraCredit > 4)) {
    console.log("Eligible for advanced exam.");
} else {
    console.log("Not eligible for advanced exam.");
}