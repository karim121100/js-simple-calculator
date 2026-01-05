function add() {
  calc((a, b) => a + b);
}

function subtract() {
  calc((a, b) => a - b);
}

function multiply() {
  calc((a, b) => a * b);
}

function divide() {
  calc((a, b) => b !== 0 ? a / b : "Error");
}

function calc(operation) {
  const a = Number(document.getElementById("num1").value);
  const b = Number(document.getElementById("num2").value);
  document.getElementById("result").textContent = operation(a, b);
}
