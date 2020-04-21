document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form')
  form.addEventListener('submit', function(e){
    e.preventDefault();
    addItem()
  })
});

 function addItem(){
  const inputText = document.querySelector('#new-task-description').value;
  const btn = document.createElement("button");
  btn.textContent = 'X'
  if (inputText === ''){
    return
  }
  const list = document.querySelector('#tasks');
  const li = document.createElement('li')
  li.textContent = inputText;
  li.appendChild(btn)
  list.append(li)
  btn.addEventListener('click',()=> list.removeChild(li))
  console.log(inputText)
}
