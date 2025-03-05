const outputElement = document.getElementById("output");
const btnCopyElement = document.getElementById("btnCopy");
const lengthElement = document.getElementById("length");
const numberElement = document.getElementById("number");
const capitalElement = document.getElementById("capital");
const smallElement = document.getElementById("small");
const symbolElement = document.getElementById("symbols");
const generateElement = document.getElementById("generate");
const formElement = document.getElementById("frm");

btnCopyElement.addEventListener("click", async () => {
  const pass = outputElement.value;
  if (pass) {
    await navigator.clipboard.writeText(pass);
    alert("copied to clipboard");
  } else {
    alert("No Password to copy");
  }
});

function generatePassword(max, min) {
  const limit = max - min + 1;
  return String.fromCharCode(Math.floor(Math.random() * limit) + min);
}
function capital() {
  return generatePassword(90, 65);
}
function small() {
  return generatePassword(122, 97);
}
function number() {
  return generatePassword(57, 48);
}
function symbols() {
  const symbol = "~!@#$%^&*()_+|}{<>*./";
  return symbol[Math.floor(Math.random() * symbol.length)];
}

const functionArray = [
  {
    element: capitalElement,
    fun: capital,
  },
  {
    element: smallElement,
    fun: small,
  },
  {
    element: numberElement,
    fun: number,
  },
  {
    element: symbolElement,
    fun: symbols,
  },
];

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const passLength = lengthElement.value;
  let output = "";
  const funArray = functionArray.filter(({ element }) => element.checked);
  for (i = 0; i < passLength; i++) {
    const index = Math.floor(Math.random() * funArray.length);
    const letter = funArray[index].fun();
    output += letter;
  }
  outputElement.value = output;
});
