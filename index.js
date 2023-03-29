let tasks = [];
const countTracker = document.querySelector('.count');

// Fires up function to add task to array, display cards and reset input values
document.getElementById("submitForm").addEventListener("click", function(event){
    event.preventDefault();
    addTasktoList();
    const task = document.getElementById("taskName");
    const description = document.getElementById("taskDescription");
    const priority = document.getElementById("taskPriority");
    //const check = document.getElementById("checkBox");

    task.value = "";
    description.value = "";
    priority.value = 1;

    //check.checked = false;
  });


// Task Object
function Task() {
    this.task = document.getElementById("taskName").value;
    this.description = document.getElementById("taskDescription").value;
    this.priority = document.getElementById("taskPriority").value;
    this.dueDate = document.getElementById("date").value;
    this.progress = document.querySelectorAll('option:checked').value;
    //this.started = document.getElementById("checkBox").value;
  }

// User Input but into an object which is pushed into task array
function addTasktoList(){
 let newTask = new Task();

 tasks.push(newTask);

 console.log(tasks);

 taskCard(tasks);
}


//Creates a New Card Upon User Submit
function taskCard(taskArray){
    let count = 0;

    const cards = document.querySelector('.cards');

    const priority = document.getElementById("taskPriority");

    const newCard = document.createElement('div');
    newCard.className = "newCard"

    //Displayes Input on New Card
    const taskHeader = document.createElement('h4');
    const descriptionHeader = document.createElement('p');
    const priorityHeader = document.createElement('p');
    const due = document.createElement('p');
    //due.style.textDecoration = "underline";
    due.style.fontWeight = "bold";
    

    // New Button inside New Card
    const newButton = document.createElement('button');
    newButton.innerHTML = "Remove";
    newButton.className = "newButton";

    const line = document.createElement('hr');

    // Goes through task array to grab and Display Object Data
    for(let t of taskArray){
        taskHeader.textContent = `${t.task}`;
        descriptionHeader.textContent = `${t.description}`;
        priorityHeader.textContent = `${t.priority}`;
        due.textContent = `Due: ${t.dueDate}`;
    }

    //validate(startedOrNot,startedOrNotMessage);
    priorityCheck(priority.value,newCard);

    cards.appendChild(newCard);
    newCard.appendChild(taskHeader);
    newCard.appendChild(descriptionHeader);
    //newCard.appendChild(startedOrNotMessage);
    newCard.appendChild(due);
    newCard.appendChild(line);
    newCard.appendChild(newButton);
    //newCard.appendChild(date);

    newButton.addEventListener('click',()=>{
        newButton.parentNode.remove();
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

// Changes bottom border on New Card Based on Priority
function priorityCheck(value,card){
    if(value == 1 ){
        card.setAttribute('id','top');
    }
    else if(value == 2){
        card.setAttribute('id','middle');
    }
    else if(value == 3){
        card.setAttribute('id','low');
    }
    else{
        console.log("Nothing");
    }
}

// Grabs Today's Date
function postDate(){
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = "";

    if(month < 10){
     currentDate = `${year}-0${month}-${day}`;
    }
    else{
        currentDate = `${year}-${month}-${day}`;
    }
    return currentDate;
}

function darkMode(){
    let page = document.body;
    let card = document.querySelector(".newCard");
    page.classList.toggle("dark-mode");
    card.classList.toggle("newCardDark");
}
