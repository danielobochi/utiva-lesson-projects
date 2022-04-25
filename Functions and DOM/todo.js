// DOM MANIPULATION

const textInput = document.querySelector("#text-input");
const todoCount = document.querySelector("#todo-count");
const todoList = document.querySelector("#todo-list");
const completedCount = document.querySelector("#completed-count");

const bgBtnColor = document.querySelector(".change-bg-color");

let counter = Number(todoCount.textContent);
let completedCounter = Number(completedCount.textContent);

// 1. Add an event listener to the input field
textInput.addEventListener("keypress", function (event) {
  //   console.log(event);

  if (event.key === "Enter") {
    // 2. Get the input value
    const inputValue = event.target.value;

    // 3. Append the value to the todo list

    todoList.innerHTML += `<li>
                        <label>
                        <input class="complete" type="checkbox" />
                        <span>${inputValue}</span>
                        <a href="#" class="remove">Remove</a>
                        </label>
                    </li>`;

    if (todoList.hasChildNodes()) {
      // Remove Items
      const removeBtns = document.querySelectorAll(".remove");

      removeBtns.forEach((btn) => {
        btn.addEventListener("click", (event) => {
          event.target.parentElement.parentElement.style.display = "none";
          counter -= 1;
          todoCount.textContent = counter;
        });
      });

      // Mark items as completed
      const completeBtns = document.querySelectorAll(".complete");

      completeBtns.forEach((btn) => {
        btn.addEventListener("change", (event) => {
          if (event.target.checked) {
            event.target.nextElementSibling.style.textDecoration =
              "line-through";

            completedCounter += 1;
            completedCount.textContent = completedCounter;
          } else {
            event.target.nextElementSibling.style.textDecoration = "none";

            completedCounter -= 1;
            completedCount.textContent = completedCounter;
          }
        });
      });
    }

    // 4. Update the todo counter
    counter += 1;
    todoCount.textContent = counter;

    // 5. Clear the input field
    event.target.value = "";
  }
});

bgBtnColor.addEventListener("click", (target) => {
  const getRandom1to9 = () => Math.floor(Math.random() * 10);
  const randomColor = `#${getRandom1to9()}c${getRandom1to9()}e${getRandom1to9()}a`;

  document.body.style.background = randomColor;
});
