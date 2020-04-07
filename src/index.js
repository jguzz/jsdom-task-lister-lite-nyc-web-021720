document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskInput = document.querySelector("input#new-task-description");
  const taskForm = document.querySelector("form#create-task-form");

  const deleteButton = document.createElement("button");
  const buttonContainer = document.querySelector("div.button-container");
  const list = document.querySelector("ul#tasks");

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTask = taskInput.value;
    const newLi = document.createElement("li");

    newLi.innerText = newTask;
    list.appendChild(newLi);
    taskForm.reset();
  });

  buttonContainer.addEventListener("click", (e) => {
    console.log("somewhere in the button Container");
    if (e.target.id === "alert") {
      console.log("In alert");
    } else if (e.target.id === "delete") {
      console.log("this should delete one day");
      list.childNodes[0].remove();
    }
  });
});
