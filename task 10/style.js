// User choice function
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error: Invalid input. Please choose either rock, paper, or scissors.');
    }
  };
  
  // Computer choice function
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
  
  // Determine winner function
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
      return 'User wins by secret cheat code!';
    }
  
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    }
  
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer wins!';
      } else {
        return 'User wins!';
      }
    }
  
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer wins!';
      } else {
        return 'User wins!';
      }
    }
  
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer wins!';
      } else {
        return 'User wins!';
      }
    }
  };
  
  // Play game function
  const playGame = () => {
    const userChoice = getUserChoice('BOmb'); // Change 'rock' to test different inputs
    const computerChoice = getComputerChoice();
    console.log(`User Choice: ${userChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  // Start the game
  playGame();
  