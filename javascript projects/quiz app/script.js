const questions = [
  {
    question: "Which is the Largest animal in the world?",
    answers: [
      {
        text: "Shark",
        correct: false,
      },
      {
        text: "Blue Whale",
        correct: true,
      },
      {
        text: "Elephant",
        correct: false,
      },
      {
        text: "Giraffe",
        correct: false,
      },
    ],
  },
  {
    question: "Which is the Smallest Country in the world?",
    answers: [
      {
        text: "Vatican City",
        correct: true,
      },
      {
        text: "Bhutan",
        correct: false,
      },
      {
        text: "Nepal",
        correct: false,
      },
      {
        text: "Shri Lanka",
        correct: false,
      },
    ],
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      {
        text: "Kalahari",
        correct: false,
      },
      {
        text: "Gobi",
        correct: false,
      },
      {
        text: "Sahara",
        correct: false,
      },
      {
        text: "Antartica",
        correct: true,
      },
    ],
  },
  {
    question: "Which is the Smallest Cotinent in the world?",
    answers: [
      {
        text: "Asia",
        correct: false,
      },
      {
        text: "Australia",
        correct: true,
      },
      {
        text: "Arctic",
        correct: false,
      },
      {
        text: "Africa",
        correct: false,
      },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerButttons = document.getElementById("answer-buttons");
const nextButtton = document.getElementById("next-btn");

let currentquestionIndex = 0;
let score = 0;
function StartQuiz() {
  currentquestionIndex = 0;
  score = 0;
  nextButtton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentquestionIndex];
  let questionNo = currentquestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButttons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButtton.style.display = "none";
  while (answerButttons.firstChild) {
    answerButttons.removeChild(answerButttons.firstChild);
  }
}
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButttons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButtton.style.display = "block";
}
function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButtton.innerHTML = "Play Again";
  nextButtton.style.display = "block";
}
function handleNextButton() {
  currentquestionIndex++;
  if (currentquestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButtton.addEventListener("click", () => {
  if (currentquestionIndex < questions.length) {
    handleNextButton();
  } else {
    StartQuiz();
  }
});
StartQuiz();
