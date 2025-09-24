import {ToDo, task_list} from "./toDo.js"
import {addEventComplete, addEventPriority, addEventRemove} from "./toDoButtons.js"
import { current_project } from "./switchProjects.js";


export function displayToDos() {
    const main = document.getElementById("main"); 
    main.innerHTML = "";
    for (let task of task_list) {
        if (task.project == current_project) {
            
            

            const todo_card = document.createElement('div');
            todo_card.classList.add("todo");
            todo_card.id = task.id;

            const title = document.createElement("span");
            title.classList.add("title");
            title.textContent = task.title;

            const desc = document.createElement("span");
            desc.classList.add("desc");
            desc.textContent = task.description;

            const dueDate = document.createElement("span");
            dueDate.classList.add("due-date");
            dueDate.textContent = task.dueDate;

            const priority = document.createElement("span");
            priority.classList.add("priority");
            priority.textContent = task.priority;

            const complete = document.createElement("div");
            complete.classList.add("todo_button");
            if (task.completed == false) {
                complete.textContent = "Not Complete";
                todo_card.style.backgroundColor = "rgb(129, 146, 130)";
            }
            else {complete.textContent = "Complete"; todo_card.style.backgroundColor = "green"; }
            addEventComplete(complete);

            const remove = document.createElement("div");
            remove.classList.add("todo_button");
            remove.textContent = "Remove";
            addEventRemove(remove);

            const priority_button = document.createElement("div");
            priority_button.classList.add("todo_button");
            priority_button.textContent = "Change Priority";
            addEventPriority(priority_button);

            todo_card.appendChild(title);
            todo_card.appendChild(desc);
            todo_card.appendChild(dueDate);
            todo_card.appendChild(priority);
            todo_card.appendChild(complete);
            todo_card.appendChild(remove);
            todo_card.appendChild(priority_button);
            main.appendChild(todo_card);
            }
    }

}

