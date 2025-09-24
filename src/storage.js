import { task_list } from "./toDo";
import { project_list } from "./project";

export function populateStorage(name, item) {
    localStorage.setItem(name, JSON.stringify(item));
}

export function getStorage(name) {
    return JSON.parse(localStorage.getItem(name));
}

export function removeStorage(name, type) {
    
    localStorage.removeItem(name);
}


