const questionBlock = document.querySelector(".quiz_pattern");
const nextElement = document.querySelector(".nxt");
const previousElement = document.querySelector(".prev");
const result = document.querySelector(".result");
const data = [
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    correct: 2,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    correct: 1,
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Au", "Pb", "Fe"],
    correct: 1,
  },
];
let initial = 0;
function onspot() {
  let question = "";
  data.forEach((item, index) => {
    if (index == initial)
      question += `<h3>${index + 1}.${item.question}</h3>${include(item)}`;
  });
  questionBlock.innerHTML = question;
}
let gndex = 0;
function include(item) {
  let options = ``;
  item.options.forEach((itm, index) => {
    options += `<label for="q${index + 1}">
            <input type="radio" name="q${gndex}" id="${index}" value="${index}" />${itm}
          </label>`;
  });
  gndex++;
  return options;
}
onspot();
nextElement.addEventListener("click", (e) => {
    e.preventDefault()
  if (initial < data.length - 1) {
    initial++;
    onspot();
  }
  if (initial == data.length - 1) {
    nextElement.innerHTML = "Submit";
  }
});
previousElement.addEventListener("click", (e) => {
    e.preventDefault()
  if (initial > 0) {
    initial--;
    onspot();
  }
});
function calculate() {
  let score = 0;
  data.forEach((item) => {
    const compare = document.querySelector(`input[name="q${index}"]:checked`);
    if (compare && Number(compare.value) == item.correct) {
      score++;
    }
  });
  return score;
}

nextElement.addEventListener("click", () => {
  if (nextElement.innerHTML == "Submit") {
    const submit = calculate();
    result.innerHTML = `Your Score ${submit}/${data.length}`;
  }
});
