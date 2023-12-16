let input = document.querySelector(".js-input")
let text = document.querySelector(".js-output")
function renderTodoList(){
    if(input.value === ""){
        alert("Please enter a task.")
    }
    else{
        let newEle = document.createElement("ul")
        newEle.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`
        text.appendChild(newEle)
        input.value = ""
        newEle.querySelector("i").addEventListener("click" , remove);
        function remove(){
            newEle.remove()
    } 
}
}

function enterTodo(event){
    if(event.key === 'Enter'){
        renderTodoList()
    }
}

