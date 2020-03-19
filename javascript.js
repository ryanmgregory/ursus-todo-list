$(document).ready(init);
// create addTask ready on page load
const todoArray = [];

function init() {
  $(".js-form-add").on("click", ".js-btn-add", addTask);
}

// addTask function to receive task (as object) into array
// create object with name (string) & complete (boolean)
// added prevent default event to stop the page from reloading

function addTask(event) {
  event.preventDefault();
  console.log("in addTask");

  const taskObject = {
    taskName: $(".js-input-task").val(),
    complete: Boolean(false)
  };
  todoArray.push(taskObject);
  console.log("to do array:", todoArray);
  emptyField();
}

// empty input field after addTask
function emptyField() {
  $(".js-input-task").val("");
}

// Display object from array on <ul> on DOM
