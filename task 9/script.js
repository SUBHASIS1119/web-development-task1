// Race numbers are assigned randomly.
let raceNumber = Math.floor(Math.random() * 1000);

// Create a variable that indicates whether a runner registered early or not.
let registeredEarly = false; // Change this as needed for testing

// Create a variable for the runner’s age and set it equal to a number.
let runnerAge = 22; // Change this as needed for testing

// Control flow statement that checks whether the runner is an adult AND registered early.
if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

// Control flow statements to determine race time.
if (runnerAge > 18 && registeredEarly) {
  console.log(`You will race at 9:30 am. Your race number is ${raceNumber}.`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`You will race at 11:00 am. Your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
  console.log(`You will race at 12:30 pm. Your race number is ${raceNumber}.`);
} else {
  // Runners exactly 18 years old
  console.log('Please see the registration desk.');
}
