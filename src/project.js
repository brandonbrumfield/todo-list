import { getStorage } from "./storage";

export class Project {

    constructor(title) {
        this.title = title;
    }

    addToDo() {

    }

}

let project_list;


if (getStorage("project_list") == null) {
    project_list = [];
}

else {
    project_list = getStorage("project_list");
}

export {project_list};
