const secretNumber = Math.floor(Math.random() * 10) + 1; 
let attempts = 0;
let guess;

do {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));
    attempts++;
    
    if (guess < secretNumber) {
        alert("Too low! Try a higher number.");
    } else if (guess > secretNumber) {
        alert("Too high! Try a lower number.");
    }
} while (guess !== secretNumber);

alert(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);