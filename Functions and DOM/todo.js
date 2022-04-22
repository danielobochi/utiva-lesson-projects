// DOM MANIPULATION

const textInput = document.querySelector("#text-input");
const todoCount = document.querySelector("#todo-count");
const todoList = document.querySelector("#todo-list");

// 1. Add an event listener to the input field
textInput.addEventListener("keypress", function (event) {
  //   console.log(event);

  if (event.key === "Enter") {
    // 2. Get the input value
    const inputValue = event.target.value;
    console.log(inputValue);

    // 3. Append the value to the todo list
    todoList.innerHTML += `<li>
                        <label>
                        <input type="checkbox" />
                        <span>${inputValue}</span>
                        <a href="#" class="remove">Remove</a>
                        </label>
                    </li>`;

    // 4. Update the todo counter
    console.log(todoCount.textContent);
    let counter = Number(todoCount.textContent);
    counter += 1;
    todoCount.textContent = counter;

    // 5. Clear the input field
    event.target.value = "";
  }
});
