import {createToDo} from "./createToDo";

const dialog = document.querySelector("#task_dialog");
const form = document.querySelector('#task_form');

export function showForm() {
    dialog.showModal();
}

export function handleForm(e) {
    e.preventDefault();

    const form_data = new FormData(form);

    const task = form_data.get('task');
    const desc = form_data.get('description');
    const due = form_data.get('due');
    const priority = form_data.get('priority');

    createToDo(task, desc, due, priority);
    
    

    dialog.close();
}