let data = []

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
    todoList.append(titleLabel)
    todoList.append(dateLabel)
    todoList.append(inputCheckBox)
    todoList.append(deleteBtn )
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
    }

    inputTitle.value = ''
}

function onDeleteHandler(event) {
    let currentId = event.target.id
    let filteredTodo = data.filter((todoItem) => todoItem.id !== currentId )
    data = filteredTodo
    renderTodos()
}