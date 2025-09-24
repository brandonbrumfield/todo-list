import {task_list} from "./toDo.js"
import { displayToDos } from "./displayToDos.js";
import { populateStorage } from "./storage.js";

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
        let task_div = e.target.parentElement;

        for (let i = 0; i < task_list.length; i++) {
                if (task_list[i].id == task_div.id) {
                        task_list.splice(i, 1);
                        console.log(task_list);
                    }

                }
        main.removeChild(task_div); 
        populateStorage("task_list", task_list);
        
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


