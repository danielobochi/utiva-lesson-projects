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
  if (event.key === "Enter") {
    // console.log(event);

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
      // 1. implement the 'Remove' item feature
      const removeBtns = document.querySelectorAll(".remove");

      removeBtns.forEach((btn) => {
        btn.addEventListener("click", (event) => {
          event.target.parentElement.parentElement.style.display = "none";

          counter -= 1;
          todoCount.textContent = counter;
        });
      });

      // 2. <strike></strike> an item when the check-box is selected to indicate completion of the todo item
      const completeBtns = document.querySelectorAll(".complete");

      completeBtns.forEach((btn) => {
        btn.addEventListener("change", (event) => {
          if (event.target.checked) {
            event.target.nextElementSibling.style.textDecoration =
              "line-through";

            // 3. update the completion counter
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

// Change the background color on button clicked

bgBtnColor.addEventListener("click", () => {
  const getRandom1to9 = () => Math.floor(Math.random() * 10);

  const randomColor = `#${getRandom1to9()}c${getRandom1to9()}e${getRandom1to9()}a`;
  console.log(randomColor);

  document.body.style.background = randomColor;
});
