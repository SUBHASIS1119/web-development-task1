const userName="Subhasis";

// Ternary expression to decide what to do if the user enters a name or not.
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// Create a variable named userQuestion with the question the user wants to ask the Magic Eight Ball.
const userQuestion = "Will I get a promotion this year?";

// Log the user's question, including the user's name if they provided one.
console.log(`${userName ? userName : 'User'} asked: ${userQuestion}`);

// Generate a random number between 0 and 7.
const randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

// Create a variable named eightBall and set it to an empty string.
let eightBall = "";

// Control flow to assign a reply to eightBall based on randomNumber.
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'Error!';
    break;
}

// Print the Magic Eight Ball’s answer.
console.log(`The Magic Eight Ball says: ${eightBall}`);
