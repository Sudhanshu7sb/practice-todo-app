let textInput = document.querySelector(".text-input");
let ul = document.querySelector("ul");
let All = document.querySelector(".All");
let Completed = document.querySelector(".Completed");
let Active = document.querySelector(".Active");
let Clear = document.querySelector(".Clear");
let item = document.querySelector(".item");



let sst=[];


function addTodo(event) {
    if(event.keyCode === 13){
        let todo ={
            text : event.target.value.trim(),
            isDone : false,
        };
       
    
    sst.push(todo);
    createUI();
    }
}

function createUI(data = sst,root = ul){
    textInput.value="";
    root.innerText="";
    data.forEach((todo ,index) => {
        let li = document.createElement("li");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.checked = todo.isDone;
        input.classList.add("input-checkbox");
        input.setAttribute("data-id", index);
        let p = document.createElement("p");
        p.innerText = todo.text;
        let span = document.createElement("span");
        span.innerText = 'X';
        span.setAttribute("data-id" ,index);
        span.classList.add("span");

        li.append(input,p,span);
        root.append(li);
    });
    item.innerText = `${sst.filter(e => !e.isDone).length} items left`;

}

function deleteTodo(event){
    if(event.target.classList.contains("span")){
        let id = event.target.dataset.id;
        
        sst.splice(id,1);
        console.log(sst);

        createUI();
    }

}

function toggleTodo(event){
    if(event.target.classList.contains("input-checkbox")){
        let id = event.target.dataset.id;
        sst[id].isDone = !sst[id].isDone;
    }
}

function handleAll(event){
    createUI();
}

function handleCompleted(event){
    let completed = sst.filter(e => e.isDone);
    createUI(completed);
}

function handleActive(event){
    let active = sst.filter(e => !e.isDone );
    createUI(active);

}

function handleClear(event){
    let updatedSST = sst.filter(e => !e.isDone);
    sst = updatedSST;
    createUI(sst);
    
}

createUI();
textInput.addEventListener('keyup',addTodo);
ul.addEventListener('click',deleteTodo);
ul.addEventListener('click',toggleTodo);
All.addEventListener('click' , handleAll);
Completed.addEventListener('click' , handleCompleted);
Active.addEventListener('click' , handleActive);
Clear.addEventListener('click' , handleClear);