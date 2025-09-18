export class ToDo {

    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
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

export const task_list = [];