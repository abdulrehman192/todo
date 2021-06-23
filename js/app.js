const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");

//to inject data to the html document
function add(todo) {

    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center"><span>${todo}</span> <i class="far fa-trash-alt delete"></i></li>
    `;
    list.innerHTML += html;
}


//to fetch data from the html document
addForm.addEventListener('submit', e =>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length > 0)
    {
        add(todo);
    }
    addForm.reset();
});

//delete todo
list.addEventListener('click', e => {

    if(e.target.classList.contains('delete'))
    {
        e.target.parentElement.remove();
    }
});
