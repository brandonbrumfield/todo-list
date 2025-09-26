import {ToDo, task_list} from "./toDo.js"
import {addEventComplete, addEventPriority, addEventRemove, addNotes} from "./toDoButtons.js"
import { current_project } from "./switchProjects.js";
import { populateStorage } from "./storage.js";


export function createToDo(fun_title, fun_desc, fun_due , fun_priority) {
    const main = document.getElementById("main");
    const task = new ToDo(fun_title, fun_desc, fun_due, fun_priority);
    task.id = crypto.randomUUID();
    task.project = current_project;
    task_list.push(task); 
    populateStorage(task.title, task);
    populateStorage("task_list", task_list);

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
    complete.textContent = "Not Complete";
    addEventComplete(complete);

    const remove = document.createElement("div");
    remove.classList.add("todo_button");
    remove.textContent = "Remove";
    addEventRemove(remove);

    const priority_button = document.createElement("div");
    priority_button.classList.add("todo_button");
    priority_button.textContent = "Change Priority";
    addEventPriority(priority_button);

    const notes_button = document.createElement("div");
    notes_button.classList.add("todo_button");
    notes_button.textContent = "View Notes";
    addNotes(notes_button);

    todo_card.appendChild(title);
    todo_card.appendChild(desc);
    todo_card.appendChild(dueDate);
    todo_card.appendChild(priority);
    todo_card.appendChild(complete);
    todo_card.appendChild(remove);
    todo_card.appendChild(priority_button);
    todo_card.appendChild(notes_button);
    main.appendChild(todo_card);

}

