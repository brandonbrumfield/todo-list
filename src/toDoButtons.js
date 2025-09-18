import {task_list} from "./toDo.js"

export function addEventComplete(completeBtn) {

}

export function addEventRemove(removeBtn) {
    removeBtn.addEventListener("click", (e) => {
        let task_div = e.target.parentElement;

        for (let i = 0; i < task_list.length; i++) {
                if (task_list[i].id == task_div.id) {
                        task_list.splice(task_list[i], 1);
                    }

                }
        main.removeChild(task_div); 
        
    })
}

export function addEventPriority(priorityButn) {

}
