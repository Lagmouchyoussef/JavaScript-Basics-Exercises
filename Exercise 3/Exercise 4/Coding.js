class Quiz {
    constructor(questions) {
        this.questions = questions;
        this.score = 0;
    }

    showQuestion(index) {
        return prompt(this.questions[index].question);
    }

    checkAnswer(index, answer) {
        if (answer?.toLowerCase() === this.questions[index].answer.toLowerCase()) {
            alert("Correct!");
            this.score++;
        } else {
            alert(`Incorrect. Answer: ${this.questions[index].answer}`);
        }
    }

    start() {
        for (let i = 0; i < this.questions.length; i++) {
            const answer = this.showQuestion(i);
            this.checkAnswer(i, answer);
        }
        alert(`Score: ${this.score}/${this.questions.length}`);
    }
}

const questions = [
    { question: "What language does React use?", answer: "JavaScript" },
    { question: "Who created Linux?", answer: "Linus Torvalds" }
];

const myQuiz = new Quiz(questions);
myQuiz.start();