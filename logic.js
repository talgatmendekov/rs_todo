let localData = JSON.parse(localStorage.getItem('todos'))
let data = localData ? [...localData] : []

const createTodoItem = ({id, title, date, completed}) => {
    let titleLabel = document.createElement('label')
    titleLabel.innerHTML = title

    let dateLabel = document.createElement('label')
    dateLabel.innerHTML = date

    let inputCheckBox = document.createElement('input')
    inputCheckBox.type = 'checkbox'
    inputCheckBox.id = id
    inputCheckBox.checked = completed
    inputCheckBox.addEventListener('change', onDoneHandler )

    let deleteBtn = document.createElement('button')
    deleteBtn.id = id
    deleteBtn.className = 'deleteBtn'
    deleteBtn.innerHTML = 'delete'
    deleteBtn.addEventListener('click', onDeleteHandler)

    let todoItem = document.createElement('li')
    todoItem.className = completed ? 'done' : ''

    todoList.append(todoItem)
    todoItem.append(titleLabel)
    todoItem.append(dateLabel)
    todoItem.append(inputCheckBox)
    todoItem.append(deleteBtn )
}

const renderTodos = () => {
    todoList.innerHTML = ''
    data.map((todoItem) => {
        createTodoItem(todoItem)
    })
}

function addTodoHandler() {
    if (inputTitle.value !== '') {
        data.push({
            id: Math.random().toString(),
            title: inputTitle.value,
            date:inputDate.value,
            completed: false
        })
        localStorage.setItem('todos', JSON.stringify(data))
        renderTodos()
    }else {
        alert('No todos please type something')
    }


    inputTitle.value = ''
}

function onDeleteHandler(event) {
    let currentId = event.target.id
    let filteredTodo = data.filter((todoItem) => todoItem.id !== currentId )
    data = filteredTodo
    localStorage.setItem('todos', JSON.stringify(data))
    renderTodos()
}

function onDoneHandler(event) {
    let checkedId = event.target.id
    let modifiedTodo = data.map(todoItem => {
        if (todoItem.id === checkedId) {
            todoItem.completed = !todoItem.completed
        }
        return todoItem
    })

    data = modifiedTodo
    localStorage.setItem('todos', JSON.stringify(data))
    renderTodos()
}

renderTodos()
addBtn.addEventListener('click', addTodoHandler)