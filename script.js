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
  for (let i = 0; i < inputValue; i++) {
    let randomIndex1 = Math.floor(Math.random() * characters.length);
    let randomIndex2 = Math.floor(Math.random() * characters.length);
    passWordOneEl.textContent += characters[randomIndex1];
    passWordTwoEl.textContent += characters[randomIndex2];
  }
 
}

// copying text to the clipboard

 function copyToClipboard1() {
   let passWordOneEl = document.getElementById("generated-password1").textContent;

  navigator.clipboard.writeText(passWordOneEl)
      .then(() => {
        alert("Password copied successfully!");
      })
      .catch(err => {
        alert("Failed to copy password:", err);
      });
}
  
function copyToClipboard2() {
  let passWordOneE2 = document.getElementById(
    "generated-password2"
  ).textContent;

  navigator.clipboard
    .writeText(passWordOneE2)
    .then(() => {
      alert("Password copied successfully!");
    })
    .catch((err) => {
      alert("Failed to copy password:", err);
    });
}