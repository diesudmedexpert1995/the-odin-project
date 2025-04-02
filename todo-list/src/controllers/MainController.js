import Project  from "../models/Project";

class MainController {
    constructor() {
        this.projects = {}; 
    }

    addProject(projectName) {
        this.projects[projectName] = new Project(projectName); 
    }

    deleteProject(projectName) {
        delete this.projects[projectName];
    }

    renameProject(oldName, newName) {
        this.projects[newName] = this.projects[oldName];
        this.deleteProject(oldName);
    }

    addItem(projectName, title, description, dueDate, priority, completed) {
        this.projects[projectName].addItem(title, description, dueDate, priority, completed);
    }

    deleteItem(projectName, id) {
        this.projects[projectName].deleteItem(id);
    }

    updateItem(projectName, id, title, description, dueDate, priority, completed) {
        this.projects[projectName].updateItem(id, title, description, dueDate, priority, completed);
    }

    traverse(projectName, callback) {
        for (const [key, project] of Object.entries(this.projects)) {
            if (key === projectName || projectName == "All") {
                project.arr.forEach((item) => {
                    callback(item, key); // Call the provided function for each item
                });
            }
        }
    }
}

export default MainController