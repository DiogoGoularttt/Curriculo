const codeElement = document.getElementById("code");
const cursor = document.querySelector(".cursor");
const codeLines = [
  "function helloWorld() {",
  '  console.log("Olá, recrutador!")};',
  "helloWorld();",
];

let lineIndex = 0;
let charIndex = 0;

function typeCode() {
  if (lineIndex < codeLines.length) {
    if (charIndex < codeLines[lineIndex].length) {
      codeElement.textContent += codeLines[lineIndex][charIndex];
      charIndex++;
      setTimeout(typeCode, 50);
    } else {
      codeElement.textContent += "\n";
      lineIndex++;
      charIndex = 0;
      setTimeout(typeCode, 100);
    }
  } else {
    cursor.style.display = "inline";
  }
}

typeCode();
