$(document).ready(init);
// create addTask ready on page load

function init() {
  $(".js-form-add").on("click", addTask);
}

// addTask function to receive task (as object) into array
// create object with name (string) & complete (boolean)

function addTask{
    console.log('in addTask');
}
