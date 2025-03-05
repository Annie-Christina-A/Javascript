{
  /* <div class="question-block">
  <h3>what is html</h3>
  <label>
    <input type="radio" name="" id="" />
    gsgfgfs
  </label>
  <label>
    <input type="radio" name="" id="" />
    dsgsagsagd
  </label>
  <label>
    <input type="radio" name="" id="" />
    gassssgggggg
  </label>
  <label>
    <input type="radio" name="" id="" />
    fhrrdngn
  </label>
</div>; */
}

const quiz = [
  {
    options: "What is the full form of MERN in the MERN stack",
    answers: [
      "MongoDB, ExpressJS, ReactJS, NodeJS",
      " MySQL, ExpressJS, ReactJS, NodeJS",
      "MongoDB, ExpressJS, Ruby, NodeJS",
      "MongoDB, ExpressJS, ReactJS, .NET",
    ],
    correct: 0,
  },
  {
    options: "Which of the following is a NoSQL database?",
    answers: ["MySQL", " PostgreSQL", "MongoDB", "SQLite"],
    correct: 2,
  },
  {
    options:
      "Which HTTP method is typically used to retrieve data from a server?",
    answers: ["GET", " POST", "PUT", "DELETE"],
    correct: 0,
  },
];
const questionBlock = document.getElementById("container");
const submitAnswer = document.getElementById("btn");
const resultDisplay = document.getElementById("result");
function load() {
  questionBlock.innerHTML = "";
  quiz.forEach((item, index) => {
    const question = `<div class="question-block"><h3>${item.options}</h3>${add(
      item
    )}</div>`;
    questionBlock.innerHTML += question;
  });
}
let qindex = 0;
function add(item) {
  let options = ``;
  item.answers.forEach((item, index) => {
    options += `<label>
    <input type="radio" name="q${qindex}" id="${index}" value="${index}" />
    ${item}
  </label>`;
  });
  qindex++;
  console.log(options);
  return options;
}
function calculate() {
  let score = 0;
  quiz.forEach((item, index) => {
    const compare = document.querySelector(`input[name="q${index}"]:checked`);
    if (compare && Number(compare.value) == item.correct) {
      score++;
    }
  });
  return score;
}
submitAnswer.addEventListener("click", function () {
  const submit = calculate();
  resultDisplay.innerHTML = `your score is ${submit} out of ${quiz.length}`;
});
load();
