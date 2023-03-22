// VARIABLES 

// declaring the variable name  
// We can declare using var, let or const --> We use const and ley
const variableName = 'This is a variable';
let secondVariableName = "This is the second variable name";

console.log("First console.log:", variableName);
console.log("Second console.log: ",secondVariableName);

//Re-assigning the variable using let
secondVariableName = "This is the modified version of he variable";
console.log("Re-assigned value: ", secondVariableName);

//Naming a variable

const _name = "John";
const name = "Paul";
const firstName = "Alex";
const $name = "Money";

// we cannot call variable with reserve keywords in javascript
// we cannot use a variable name multiple time top declare other variables

//DATA TYPES 

//Primitive Data Types:
//Strings: Letters 
//Numbers: Whole number or decimal value
//Booleans: True or false
//Null: Is Null we have something to store a value in but that value is none existante
//Undifined: is Undefined, we dont have either the variable or the value (does not exist)
// Symbol
// Object: Complex Data Types

//STRING
const stringType = "Hello world"
const stringWithSingleQuote = 'Single Quote String'
const newName= "James"
const backTicks = `Hello ${stringWithSingleQuote}`
const firstNumber = 50;
const secondNumber = 60;
const addTwoNumber = `${10 + 10}`
const backTicksWithFunctionality = `The sum of the firstNumber and SecondNumber is equal to ${firstNumber + secondNumber}`



console.log(stringType);
console.log(stringWithSingleQuote);
console.log(backTicks)
console.log(addTwoNumber)
console.log(backTicksWithFunctionality);
console.log(typeof stringWithSingleQuote)
console.log(typeof backTicks)
console.log(typeof firstNumber)

//NUMBERS 
// JAvascript is friendly with number cause we cannot specified the type of the number. Ity is called : Untyped
// Unlike C programming int wholeNUmber = 5 or deciMalNumber = 5.0

const wholeNumber = 5;
const decimalNumber = 0.5;

console.log(wholeNumber);
console.log(decimalNumber);

// OPERATION

const firsSmalltNumber = 5;
const secondSmallNumber = 10;
const singleQuotes = "Hello"

const result = firsSmalltNumber + secondSmallNumber;
const secondResult = firsSmalltNumber - secondSmallNumber;
const thirdResult = firsSmalltNumber / secondSmallNumber;
const fourthResult = singleQuotes / firsSmalltNumber;

console.log(result);
console.log(typeof result);
console.log(secondResult);
console.log(thirdResult);
console.log(fourthResult);
console.log(typeof fourthResult); //result is Number because in computing NaN is a numeric data type whose value cannot be represented as a number


