const addForm = document.querySelector('.addForm');
const Todos = document.querySelector('.todos');
const Search = document.querySelector('#search');


const generateTemplate = (action) =>{
    const newTemplate = `
            <div class="todo__listing">
                <span class="todo__item">${action}</span><i class="fas del fa-trash-alt"></i>
            </div>
            `;
    Todos.innerHTML += newTemplate;
}
const filterTodos = (term) => {
    Array.from(Todos.children)
        .filter(item => !item.textContent.toLowerCase().includes(term))
        .forEach(item => item.classList.add('filtered'));
    
    Array.from(Todos.children)
        .filter(item => item.textContent.toLowerCase().includes(term))
        .forEach(item => item.classList.remove('filtered'));
}


//adding a new Todo
addForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const todo = addForm.addtodo.value.trim();
    if(todo.length != 0){
        generateTemplate(todo);
    }
    addForm.reset();
    //incase if on filtermode during addition of new todos
    filterTodos(search.value);
});


//removing a Todo
Todos.addEventListener('click', (e) =>{    
    if(e.target.classList.contains('del')){
       e.target.parentElement.remove();
    }
});


//filtering through the list of todos
Search.addEventListener('keyup', (e) =>{
    search.parentElement.addEventListener('submit', (e) => e.preventDefault());

    searchTerm = e.target.value.toLowerCase().trim();
    filterTodos(searchTerm);
})

