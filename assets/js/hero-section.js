const codeElement = document.getElementById("code");
const cursor = document.querySelector(".cursor");
const codeLines = [
  "function helloWorld() {",
  '  console.log("Olá, recrutador!");',
  "}",
  "helloWorld();",
];

let lineIndex = 0;
let charIndex = 0;

function typeCode() {
  if (lineIndex < codeLines.length) {
    if (charIndex < codeLines[lineIndex].length) {
      codeElement.textContent += codeLines[lineIndex][charIndex];
      charIndex++;
      setTimeout(typeCode, 50); // Velocidade da digitação
    } else {
      codeElement.textContent += "\n"; // Nova linha
      lineIndex++;
      charIndex = 0;
      setTimeout(typeCode, 100); // Tempo entre as linhas
    }
  } else {
    cursor.style.display = "inline"; // Mostra o cursor no final
  }
}

typeCode(); // Inicia a animação
