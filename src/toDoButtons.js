import {task_list} from "./toDo.js"
import { displayToDos } from "./displayToDos.js";
import { populateStorage } from "./storage.js";
import { project_list } from "./project.js";

export function addEventComplete(completeBtn) {
    completeBtn.addEventListener("click", (e) => {
        let task_div = e.target.parentElement;


        for (let i = 0; i < task_list.length; i++) {
                if (task_list[i].id == task_div.id) {
                        task_list[i].completed = !task_list[i].completed;
                    }

                }
        
        if (completeBtn.textContent == "Not Complete") {
            completeBtn.textContent = "Complete";

            task_div.style.backgroundColor = "green";
        }

        else {
            completeBtn.textContent = "Not Complete";
            task_div.style.backgroundColor = "rgb(129, 146, 130)";
            
        }

        populateStorage("task_list", task_list);
        
    })

}

export function addEventRemove(removeBtn) {
    removeBtn.addEventListener("click", (e) => {
        let parent_div = e.target.parentElement;

            if (parent_div.classList == "todo") {
                for (let i = 0; i < task_list.length; i++) {
                        if (task_list[i].id == parent_div.id) {
                                task_list.splice(i, 1);
                            }

                        }
                main.removeChild(parent_div); 
                populateStorage("task_list", task_list);
            }

            else if (parent_div.classList == "project_wrapper") {
                for (let i = 0; i < project_list.length; i++) {
                        if (project_list[i].id == parent_div.id) {
                                project_list.splice(i, 1);
                            }

                        }
                sidebar.removeChild(parent_div); 
                populateStorage("project_list", project_list);

            }
        
    })
}


export function addEventPriority(priorityBtn) {
    priorityBtn.addEventListener("click", (e) => {
        let task_div = e.target.parentElement;

        let chosen_priority = prompt("Enter new priority");


        for (let i = 0; i < task_list.length; i++) {
                if (task_list[i].id == task_div.id) {
                        task_list[i].priority = chosen_priority;
                    }

                }
        
        task_div.querySelector(".priority").textContent = chosen_priority;
        populateStorage("task_list", task_list);
        
        
        
    })
    

}


