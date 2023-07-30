//create variables to accept first and second user input
let firstInput = prompt("Enter the first number:");
let secondInput = prompt("Enter the second number:");
//create an addition function
function addition(a, b) {
//the addition function will return the addition
return parseInt(a) + parseInt(b);
}
//invoke addition function
console.log(addition(firstInput, secondInput));