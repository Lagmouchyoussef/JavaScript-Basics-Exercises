# Lab 1: JavaScript

### Exercise 1:
Write a JavaScript script that prompts the user to enter two numbers, then displays the sum, difference, product, and quotient of these two numbers in the console.

### Exercise 2:
Create a program that allows the user to guess a random number between 1 and 10 chosen by the computer. After each guess (read using the prompt function), indicate whether the target number is higher or lower than the guess. When the number is found, display the "score" (the number of attempts needed to find the solution).

### Exercise 3:
Create a JavaScript application that simulates an interactive quiz. The application should ask the user a series of questions, allow them to input their answers, then display the final result (the number of correct answers out of the total number of questions).

#### Steps to follow:
1. **Define the questions:**
   - Create a QUESTIONS array containing objects representing each question.
   - Each object should have a `question` property for the question text and a `answer` property for the correct answer.

2. **Prompt user for answers:**
   - Use a `for` loop to iterate through each question in the QUESTIONS array.
   - For each iteration, use `prompt()` to ask the user for their answer to the current question.
   - Store the user's response in a variable.

3. **Check answers:**
   - Compare the user's answer with the correct answer for each question.
   - If the answer is correct, display "Correct answer" and increment a correct answers counter.
   - Otherwise, display "Wrong answer".

4. **Display results:**
   - At the end of the loop, display the number of correct answers out of the total number of questions.
   - You can use `alert()` to show the results to the user.

### Exercise 4:
Reimplement Exercise 3 using classes.

#### Steps to follow:
1. **Create Questionnaire class:**
   - Define a class called `Questionnaire`.
   - Add a constructor that takes an array of questions as a parameter.
   - Initialize a `questions` property with this array.
   - Initialize a `score` property to zero to track the number of correct answers.

2. **displayQuestion method:**
   - Add a `displayQuestion(index)` method that shows the question at the specified index and returns the user's input answer.

3. **checkAnswer method:**
   - Add a `checkAnswer(index, answer)` method that takes the question index and user's answer as parameters.
   - Verify if the user's answer matches the correct answer for that question.
   - Increment the score if the answer is correct.

4. **start method:**
   - Add a `start()` method to launch the questionnaire.
   - Loop through each question, display it, and verify the user's answer using the previous methods.
   - Display the final score at the end of the questionnaire.

5. **Create questions:**
   - Create an array containing objects representing the questions. Each object should have a `question` property for the question text and an `answer` property for the correct answer.

6. **Instantiate questionnaire:**
   - Create an instance of the `Questionnaire` class by passing the questions array as a parameter.
   - Call the `start()` method on this instance to begin the questionnaire.

After following these steps, your application should be ready to ask questions to the user and display their final score.
