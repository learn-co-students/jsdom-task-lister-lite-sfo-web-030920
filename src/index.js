document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  form.addEventListener("submit", addItemToList);
  // const allItems = document.getElementsByClassName('list-item'); 
});

// function deleteButton() {
//   const deleteButton = document.createElement('button');
//   deleteButton.textContent = 'x';
//   item.append(deleteButton);
// }

function addItemToList(event) {
  const ul = document.getElementById('tasks');
  const item = document.createElement('li');
  item.className = 'list-item'
  event.preventDefault();
  const listItem = ul.appendChild(item);
  const input = document.getElementById('new-task-description').value;
  listItem.textContent = input;
  // deleteButton();
}

// function deleteItem(event) {
  
// }