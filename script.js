const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passWordOneEl = document.getElementById("generated-password1");
let passWordTwoEl = document.getElementById("generated-password2");

// console.log(inputValue)


function generatedPassword() {
  passWordOneEl.textContent = ""; // Clear existing password 1
  passWordTwoEl.textContent = ""; // Clear existing password 2

  let inputEL = document.getElementById("input-el");
  let inputValue = parseInt(inputEL.value);

  // Validate inputValue
  if (inputValue >= 8 && inputValue <= 20) {
    for (let i = 0; i < inputValue; i++) {
      let randomIndex1 = Math.floor(Math.random() * characters.length);
      let randomIndex2 = Math.floor(Math.random() * characters.length);
      passWordOneEl.textContent += characters[randomIndex1];
      passWordTwoEl.textContent += characters[randomIndex2];
    }
  } else {
    alert("Please enter a number between 8 and 20.");
  }
}




// copying text to the clipboard


function copyToClipboard(passwordElementId) {
  let password = document.getElementById(passwordElementId).textContent.trim();

  if (password !== "") {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        alert("Password copied successfully!");
      })
      .catch((err) => {
        alert("Failed to copy password:", err);
      });
  } else {
    alert("No password generated. Generate a password first.");
  }
}

// Call the function for each password element
// have implement the DRY principles
function copyToClipboard1() {
  copyToClipboard("generated-password1");
}

function copyToClipboard2() {
  copyToClipboard("generated-password2");
}

  
