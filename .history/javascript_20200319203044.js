$(document).ready(init);
// create addTask ready on page load
const todoArray = [];

function init() {
  $(".js-form-add").on("click", ".js-btn-add", addTask);
  // $(".js-unordered-list").on("click", ".js-btn-complete", toggleBtn);
}

const taskObject = {
  taskName: $(".js-input-task").val(),
  complete: false
};
// addTask function to receive task (as object) into array
// create object with name (string) & complete (boolean)
// added prevent default event to stop the page from reloading

function addTask(event) {
  event.preventDefault();
  console.log("in addTask");

  const taskObject = {
    taskName: $(".js-input-task").val(),
    complete: false
    // complete: Boolean(false)
  };
  todoArray.push(taskObject);
  console.log("to do array:", todoArray);
  emptyField();
  render();
}

// empty input field after addTask
function emptyField() {
  $(".js-input-task").val("");
}

// Display object from array on <ul> on DOM
// empty array before each push
function render() {
  $(".js-unordered-list").empty();
  for (let i = 0; i < todoArray.length; i++) {
    const individualTask = todoArray[i];
    $(".js-unordered-list").append(`
        <div>
        <li>${individualTask.taskName}${individualTask.complete} <button class="js-btn-complete">COMPLETE</button>  </li>
        <div>
        `);
  }
}

// function toggleBtn() {
//   console.log("in ToGgLe!!!");
//   $(".js-unordered-list").append(`
//   <div>
//   <button class="js-btn-complete"${}>COMPLETE</button>  </li>
//   <div>
//   `);

// }
