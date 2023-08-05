// Prompt the user to enter the birth year
let birthYear = parseInt(prompt("Enter your birth year :"));
// Prompt the user to enter the current year
let currentYear = parseInt(prompt("Enter the current year:"));
// Calculate the age let age = currentYear - birthYear;
let age = currentYear - birthYear;
// Display the calculated age
console.log("Your age is: " + age);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Loop through the array
for (let i = 0; i < numbers.length; i++) {
     // Check if the number is even  
  if (numbers[i] % 2 === 0) {
     // Output the even number
    console.log(numbers[i]);
  }
  }