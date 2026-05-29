const readline = require("readline-sync");

const levels = {
    1: {
        name: "Easy",
        attempts: 5,
        questions: [
            {
                question: "What color is the sky?",
                answer: "blue"
            },
            {
                question: "How many days are in a week?",
                answer: "7"
            },
            {
                question: "What animal says meow?",
                answer: "cat"
            }
        ]
    },

    2: {
        name: "Medium",
        attempts: 4,
        questions: [
            {
                question: "What is the capital of Brazil?",
                answer: "brasilia"
            },
            {
                question: "How many planets are in the solar system?",
                answer: "8"
            },
            {
                question: "Who created Minecraft?",
                answer: "notch"
            }
        ]
    },

    3: {
        name: "Hard",
        attempts: 3,
        questions: [
            {
                question: "What language is used with Node.js?",
                answer: "javascript"
            },
            {
                question: "What does CPU stand for?",
                answer: "central processing unit"
            },
            {
                question: "What year was JavaScript created?",
                answer: "1995"
            }
        ]
    }
};

console.log("==== QUIZ GAME ====");
console.log("Choose Difficulty:");
console.log("1 - Easy");
console.log("2 - Medium");
console.log("3 - Hard");

let levelChoice = readline.question("Enter (1/2/3): ");

let level = levels[levelChoice] || levels[1];

let attempts = level.attempts;
let score = 0;

console.clear();

console.log(`=== ${level.name.toUpperCase()} MODE ===`);

for (let i = 0; i < level.questions.length; i++) {

    if (attempts <= 0) {
        break;
    }

    let currentQuestion = level.questions[i];

    console.log(`\nQuestion ${i + 1}:`);
    console.log(currentQuestion.question);

    let userAnswer = readline.question("Your answer: ").toLowerCase().trim();

    if (userAnswer === currentQuestion.answer.toLowerCase()) {
        console.log("Correct!");
        score++;
    } else {
        console.log("Wrong!");
        console.log("Correct answer:", currentQuestion.answer);
        attempts--;
    }

    console.log("Attempts left:", attempts);

    readline.question("\nPress ENTER...");
    console.clear();
}

console.log("==== GAME OVER ====");
console.log("Final Score:", score);

if (attempts > 0) {
    console.log("You finished the quiz!");
} else {
    console.log("No attempts left!");
}