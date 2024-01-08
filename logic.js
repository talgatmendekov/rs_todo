let data = []

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