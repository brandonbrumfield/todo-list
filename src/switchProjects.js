import { displayToDos } from "./displayToDos";
import { project_list } from "./project";
import { addEventRemove } from "./toDoButtons";

export let current_project = "Main";

export function switchProjects(project) {
    current_project = project;
    displayToDos();

}

export function displayProjects() {
    for (let project of project_list) {
            const project_wrapper = document.createElement("div");
            project_wrapper.classList = "project_wrapper";
        
            const project_span = document.createElement("span");
            project_span.textContent = project.title;
            project_span.classList = "project_span";
            project_span.addEventListener("click", () => {
                switchProjects(project.title);
            })
            
            const remove = document.createElement("div");
            remove.classList.add("project_button");
            remove.textContent = "Remove";
            addEventRemove(remove);
            
            project_wrapper.appendChild(project_span);
            
            if (project.title != "Main") {
            project_wrapper.appendChild(remove);
            }
        
        
            sidebar.appendChild(project_wrapper);
        }
}

