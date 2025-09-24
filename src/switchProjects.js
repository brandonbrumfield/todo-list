import { displayToDos } from "./displayToDos";
import { project_list } from "./project";

export let current_project = "Main";

export function switchProjects(project) {
    current_project = project;
    displayToDos();

}

export function displayProjects() {
    for (let project of project_list) {
            const project_span = document.createElement("span");
            project_span.textContent = project.title;
            project_span.classList = "project_span";
            project_span.addEventListener("click", () => {
                switchProjects(project.title);
            })
            sidebar.appendChild(project_span);
        }
}