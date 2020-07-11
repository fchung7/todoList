// Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


// Event Listeners

todoButton.addEventListener("click", addTodo);

todoList.addEventListener("click", removeCheck);



//Functions
function addTodo(event){

    event.preventDefault();
    
    if(todoInput.value.length !== 0){
    // Create DIV and Add class 'todo'
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create new todo task (li)
    
    const newList = document.createElement("li");
    newList.innerText = todoInput.value;    
    newList.classList.add("todo-item");
    // Put in todo Div
    todoDiv.appendChild(newList);

    // Create Exclamation Button
    const exclamationButton = document.createElement("button");
    exclamationButton.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
    exclamationButton.classList.add("exclamation-btn")
    // Put inside todo Div
    todoDiv.appendChild(exclamationButton);
    
    // Create Check Button
    const checkButton = document.createElement("button");
    checkButton.innerHTML = "<i class='far fa-check-circle'></i>";
    checkButton.classList.add("complete-btn");
    // Put in todo Div
    todoDiv.appendChild(checkButton);

    // Create Remove Button
    const removeButton = document.createElement("button");
    removeButton.innerHTML = "<i class='far fa-trash-alt'></i>";
    removeButton.classList.add("remove-btn");
    // Put in todo Div
    todoDiv.appendChild(removeButton);
    
    // Put the todo Div in the todo List(ul)
    todoList.appendChild(todoDiv);
    // Clear todo Input value
    todoInput.value = "";    

    }  
  

}



function removeCheck(event){
    const item = event.target;
    
    // Delete item
    if(item.classList[0] === "remove-btn"){
        const todoDiv = item.parentElement;
        todoDiv.classList.add("fade");

        // Remove todo after transition happened
        todoDiv.addEventListener("transitionend", function(){
            todoDiv.remove();
        })       

    }

    // Exclamation 
    if(item.classList[0] === "exclamation-btn"){
        const todoDiv = item.parentElement;
        todoDiv.classList.toggle("important")
    }

    // Check mark
    if(item.classList[0] === "complete-btn"){
        const todoDiv = item.parentElement;
        todoDiv.classList.toggle("completed");
    }
}

