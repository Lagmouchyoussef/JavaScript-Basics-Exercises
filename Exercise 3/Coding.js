const QUESTIONS = [
    {
        question: "What is the capital of France?",
        answer: "Paris"
    },
    {
        question: "How many continents are there?",
        answer: "7"
    },
    {
        question: "What is the largest planet in our solar system?",
        answer: "Jupiter"
    }
];

let score = 0;

for (let i = 0; i < QUESTIONS.length; i++) {
    const userAnswer = prompt(QUESTIONS[i].question);
    
    if (userAnswer?.toLowerCase() === QUESTIONS[i].answer.toLowerCase()) {
        alert("Correct answer!");
        score++;
    } else {
        alert(`Wrong answer! The correct answer is: ${QUESTIONS[i].answer}`);
    }
}

alert(`Quiz completed! Your score: ${score}/${QUESTIONS.length}`);