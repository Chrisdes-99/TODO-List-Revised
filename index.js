let tasks = [];

document.getElementById("submitForm").addEventListener("click", function(event){
    event.preventDefault();
    addTasktoList();
    const task = document.getElementById("taskName");
    const description = document.getElementById("taskDescription");
    const priority = document.getElementById("taskPriority");
    const check = document.getElementById("checkBox");

    task.value = "";
    description.value = "";
    priority.value = 1;

    check.checked = false;
  });

function Task() {
    this.task = document.getElementById("taskName").value;
    this.description = document.getElementById("taskDescription").value;
    this.priority = document.getElementById("taskPriority").value;
    this.started = document.getElementById("checkBox").value;
  }

  function addTasktoList(){
    let newTask = new Task();

    tasks.push(newTask);

    taskCard(tasks);

    taskCount();

    console.log(tasks);
}

function taskCount(){
    const countTracker = document.querySelector('.count');

    countTracker.textContent = tasks.length;

    return countTracker;
}

function taskCard(taskArray){
    const cards = document.querySelector('.cards');
    const startedOrNot = document.querySelector('#checkBox');
    const priority = document.getElementById("taskPriority");

    const newCard = document.createElement('div');
    newCard.className = "newCard"

    const taskHeader = document.createElement('h4');
    const descriptionHeader = document.createElement('p');
    const priorityHeader = document.createElement('p');
    const startedOrNotMessage = document.createElement('p');
    const date = document.createElement('p');
    date.textContent = `Posted: ${postDate()}`
    const newButton = document.createElement('button');
    newButton.innerHTML = "Remove"

    const line = document.createElement('hr');

    //const anotherCheckBox = document.createElement('input');
    //anotherCheckBox.type = "checkbox";

    //const newButton = document.createElement('button');
    //newButton.className = "removeButton";


    for(let t of taskArray){
        taskHeader.textContent = `${t.task}`;
        descriptionHeader.textContent = `${t.description}`;
        priorityHeader.textContent = `${t.priority}`;
    }

    validate(startedOrNot,startedOrNotMessage);
    priorityCheck(priority.value,newCard);

    cards.appendChild(newCard);
    newCard.appendChild(taskHeader);
    newCard.appendChild(descriptionHeader);
    newCard.appendChild(startedOrNotMessage);
    newCard.appendChild(newButton)
    newCard.appendChild(line);
    newCard.appendChild(date);

    newButton.addEventListener('click',()=>{
        newButton.parentNode.remove();
        delete tasks[newButton.parentNode];
        tasks.length -= 1;
    })
}

function validate(check,text){

    text.textContent = "";
    text.style.fontWeight = "bold";
    text.style.fontSize = "small";

    if(check.checked){
        text.textContent = "(Be proud of yourself for the work you've begun.)";
    }
    else{
        text.textContent = `(Do, or do not. There is no “try” - Yoda)`;
    }
}

function priorityCheck(value,card){
    if(value == 1 || value == 2 ){
        card.style.border = "2px solid red";
    }
    else if(value == 3){
        card.style.border = "2px solid orange";
    }
    else if(value == 4 || value == 5){
        card.style.border = "2px solid green";
    }
    else{
        console.log("Nothing");
    }
}

function postDate(){
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${month}-${day}-${year}`;
    return currentDate;
}

console.log(postDate());