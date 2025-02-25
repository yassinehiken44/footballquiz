const questions = [
    {
        question: "Who won the 2018 FIFA World Cup?",
        options: ["France", "Germany", "Brazil", "Argentina"],
        correctAnswer: "France"
    },
    {
        question: "Who is known as 'The Egyptian King' in football?",
        options: ["Mohamed Salah", "Cristiano Ronaldo", "Lionel Messi", "Neymar"],
        correctAnswer: "Mohamed Salah"
    },
    {
        question: "Which country is known as the birthplace of football?",
        options: ["England", "Germany", "Brazil", "Argentina"],
        correctAnswer: "England"
    },
    // Add more questions here (add up to 100 questions)
];

let currentQuestionIndex = 0;
let score = 0;

// Function to display the question and options
function displayQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question-text").innerText = currentQuestion.question;
    const answerList = document.getElementById("answer-list");
    answerList.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const li = document.createElement("li");
        li.innerText = option;
        li.onclick = () => handleAnswer(option);
        answerList.appendChild(li);
    });

    // Animation for fading in the question
    document.getElementById("quiz").style.animation = "fadeIn 1s forwards";
}

// Function to handle answer selection
function handleAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (selectedAnswer === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    displayQuestion();
}

// Show final score
function showResult() {
    document.getElementById("quiz").style.animation = "fadeOut 1s forwards";
    setTimeout(() => {
        document.getElementById("quiz").style.display = "none";
        document.getElementById("result").style.display = "block";
        document.getElementById("result").innerText = `You got ${score} out of ${questions.length} questions right!`;
    }, 1000);
}

// Initialize the quiz
window.onload = () => {
    displayQuestion();
}