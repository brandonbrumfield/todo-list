import { getStorage } from "./storage";

export class ToDo {

    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = "";
        this.completed = false;

    }

    toggleComplete() {
        if (this.completed == false) {
            this.completed = true;
        }

        else {
            this.completed = false;
        }


    }

}

let task_list;


if (getStorage("task_list") == null) {
    task_list = [];
}

else {
    task_list = getStorage("task_list");
}

export {task_list};