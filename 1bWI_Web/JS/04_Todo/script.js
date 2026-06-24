let container = document.getElementById("todos")
let input = document.getElementById("input");
let submit = document.getElementById("submit");
let id = 1;
let todos = [
]

function update() {
let html = "";
todos.forEach((element) => {
    html += "<div>" + element.title + " - " + element.isDone + ' <button onclick="complete(' + element.id + ')">' + (element.isDone ? "uncomplete" : "complete") + '</button>' + ' <button onclick="deleteTodo(' + element.id + ')">delete</button></div>';
});
container.innerHTML = html;
}

function addTodo() {
    todos.push({id:id++,title:input.value,isDone:false})
    update();
}

function deleteTodo(id) {
    todos = todos.filter((t) => t.id !== id);
    update()
}

function complete(id) {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
        todo.isDone = !todo.isDone;
    }
    update()

}