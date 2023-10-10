"use strict";
//Name  Muhammad Umar Ehsan
//Roll No   PIAIC218449
//Batch Batch 47
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
//uppercase, and titlecase.
let Name = 'MUHAMMAD WAQAS';
console.log(Name.toLowerCase()); // Output: muhammad waqas
let Name1 = "umer ameen"; // Output: UMAR AMEEN
console.log(Name1.toUpperCase());
let Name3 = "farhan shah";
let titleCaseName = Name3.toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase());
console.log(titleCaseName); //Output:Farhan Shah 
