import "./styles.css";
import {createToDo} from "./createToDo";
import {showForm, handleForm} from "./handleForm.js"
import { createProject, createMain } from "./createProject.js";
import { getStorage } from "./storage.js";
import { displayProjects } from "./switchProjects.js";
import { displayToDos } from "./displayToDos.js";
import { project_list } from "./project.js";
import { Project } from "./project.js";
import { populateStorage } from "./storage.js";

if (getStorage("project_list") == null) {
    const project_name = "Main";
    const project = new Project(project_name);
    project_list.push(project);
    populateStorage(project.title, project );
    populateStorage("project_list", project_list);
    createToDo("Call the Doctor", "Call about appointment", "September 20 2026", "1");
    createToDo("Get groceries", "Look at list", "September 20 2026", "2");
    createToDo("Finish project", "Finish to-do list project", "September 20 2026", "3");
}


displayProjects();
displayToDos();






const header_button = document.getElementById("add");
const add_project = document.getElementById("add_project");

header_button.addEventListener("click", () => {
    showForm();
})

task_form.addEventListener('submit', (e) => {
    handleForm(e);
})

add_project.addEventListener("click", () => {
    createProject();
})

