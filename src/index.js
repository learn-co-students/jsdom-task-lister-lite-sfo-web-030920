document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newForm = document.getElementById("create-task-form");
  const description = document.getElementById("new-task-description");

  const task = document.getElementById("tasks");

  newForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const list = document.createElement('li');
    const newList = task.appendChild(list);
    
    newList.textContent = description.value;
    });

});
