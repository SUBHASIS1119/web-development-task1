// this is my current  age
let myAge =22;
//a variable is created od earlyYears
let earlyYears=2;
earlyYears *=10.5;

//a variable laterYears can be created by using formula myage-2
let laterYears =myAge-2;

// Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. 
// Use the multiplication assignment operator to multiply and assign in one step.
laterYears *= 4;

// If you’d like to check your work at this point, print earlyYears and laterYears to the console. 
// Are the values what you expected?
console.log(`Early years: ${earlyYears}`);
console.log(`Later years: ${laterYears}`);

// Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.
const myAgeInDogYears = earlyYears + laterYears;

// The toLowerCase method returns a string with all lowercase letters.
const myName = "Subhasis Sethy".toLowerCase(); 

// Write a console.log statement that displays your name and age in dog years. 
// Use string interpolation to display the value in the following sentence:
// My name is NAME. I am HUMAN AGE years old in human years which is DOG AGE years old in dog years.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
