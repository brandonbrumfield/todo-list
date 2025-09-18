import "./styles.css";
import {createToDo} from "./createToDo";
import {showForm, handleForm} from "./handleForm.js"

createToDo("Call the Doctor", "Call about appointment", "September 20 2026", "1");
createToDo("Get groceries", "Look at list", "September 20 2026", "2");
createToDo("Finish project", "Finish to-do list project", "September 20 2026", "3");


const header_button = document.getElementById("add");

header_button.addEventListener("click", () => {
    showForm();
})

task_form.addEventListener('submit', (e) => {
    handleForm(e);
})