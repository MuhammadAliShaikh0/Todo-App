function addTodo() {
    var input = document.getElementById("todoInput");
    var text = input.value;
    if (text.trim() === "") {
        alert("Please enter a valid todo.");
        return;
    }
    var ul = document.getElementById("todoList");
    var li = document.createElement("li");
    var span = document.createElement("span");
    span.textContent = text;
    
    var editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = function() {
        var newText = prompt("Edit todo:", text);
        if (newText !== null) {
            span.textContent = newText;
        }
    };
    
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() {
        ul.removeChild(li);
    };
    
    
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    ul.appendChild(li);
    
    input.value = "";
}

function deleteAll() {
    var ul = document.getElementById("todoList");
    ul.innerHTML = "";
}
