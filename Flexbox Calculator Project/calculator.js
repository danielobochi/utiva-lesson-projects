const monitor = document.querySelector(".monitor");

const buttons = document.querySelectorAll(".btn-num");
const btnClear = document.querySelector(".btn-clear");
const btnEquals = document.querySelector(".btn-equals");

let watcher = "";

const calculate = (operator) => {
  let result = 0;
  const [leftFigure, rightFigure] = watcher.split(operator);

  if (operator === "x") {
    result = Number(leftFigure) * Number(rightFigure);
  } else if (operator === "/") {
    result = Number(leftFigure) / Number(rightFigure);
  } else if (operator === "+") {
    result = Number(leftFigure) + Number(rightFigure);
  } else if (operator === "-") {
    result = Number(leftFigure) - Number(rightFigure);
  }

  return result;
};

// 1. Get input
buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (monitor.textContent === "0") {
      monitor.textContent = "";
    }

    watcher += event.target.textContent;
    monitor.textContent = watcher;
  });
});

// 2. Process input
btnEquals.addEventListener("click", () => {
  if (watcher.includes("x")) {
    watcher = calculate("x");
    monitor.textContent = watcher;
  } else if (watcher.includes("/")) {
    watcher = calculate("/");
    monitor.textContent = watcher;
  } else if (watcher.includes("+")) {
    watcher = calculate("+");
    monitor.textContent = watcher;
  } else if (watcher.includes("-")) {
    watcher = calculate("-");
    monitor.textContent = watcher;
  }
});

// 3. Reset calculator
btnClear.addEventListener("click", () => {
  monitor.textContent = "0";
  watcher = "";
});
