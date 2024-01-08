// creating mainConrainer

let mainConrainer = document.createElement("main");
mainConrainer.className = "mainContainer";
document.body.prepend(mainConrainer);

// creating project title

let prjectTitle = document.createElement("h1");
prjectTitle.className = "projectTitle";
prjectTitle.innerHTML = "Let's do it";
mainConrainer.append(prjectTitle);

// creating mainBlock for the todo items

let mainBlock = document.createElement("section");
mainBlock.className = "mainBlock";
mainConrainer.append(mainBlock);

// creating container for the inputs and button

let firstDiv = document.createElement("div");
firstDiv.className = "firstDiv";
mainBlock.append(firstDiv);

// creating listContainer for the future todos
let todoList = document.createElement('ul')
todoList.className = 'todoList'
mainBlock.append(todoList)

// creating input for the title

let inputTitle = document.createElement('input')
inputTitle.className = 'inputTitle'
inputTitle.type = 'text'
inputTitle.setAttribute('Placeholder', "Gonna do...")
firstDiv.append(inputTitle)

// creating input for the date

let inputDate = document.createElement("input");
inputDate.className = "inputDate";
inputDate.type = 'date'
firstDiv.append(inputDate)

// creating add button

let addBtn = document.createElement('button')
addBtn.className = 'addBtn'
addBtn.innerHTML = 'Add todo'
firstDiv.append(addBtn)





