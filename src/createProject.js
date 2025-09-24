import { Project, project_list } from "./project";
import { populateStorage } from "./storage";
import { displayProjects, switchProjects } from "./switchProjects";
import { addEventRemove } from "./toDoButtons";

const add_project = document.getElementById("add_project");
const sidebar = document.getElementById("sidebar");


export function createProject() {
    
    const project_name = prompt("Enter project name.");
    const project = new Project(project_name);
    project.id = crypto.randomUUID();
    project_list.push(project);
    populateStorage(project.title, project );
    populateStorage("project_list", project_list);

    const project_wrapper = document.createElement("div");
    project_wrapper.id = project.id;
    project_wrapper.classList = "project_wrapper";

    const project_span = document.createElement("span");
    project_span.textContent = project_name;
    project_span.classList = "project_span";
    project_span.addEventListener("click", () => {
        switchProjects(project_name);
    })
    
    const remove = document.createElement("div");
    remove.classList.add("project_button");
    remove.textContent = "Remove";
    addEventRemove(remove);
    
    project_wrapper.appendChild(project_span);
    project_wrapper.appendChild(remove);


    sidebar.appendChild(project_wrapper);


        
    

}

export function createMain() {
    const project_name = "Main";
    const project = new Project(project_name);
    project_list.push(project);
    populateStorage(project.title, project );
    populateStorage("project_list", project_list);

    const project_span = document.createElement("span");
    project_span.textContent = project_name;
    project_span.classList = "project_span";
    project_span.addEventListener("click", () => {
        switchProjects(project_name);
    })
    displayProjects();
}