export class View {
    cache = [false];
    constructor(controller) {
        this.controller = controller;
        this.addTask();
        this.handleForm(); 
        this.addProject(); 
        this.renderOption = "All";
        this.renderData();
        const all = document.getElementById("my-tasks");
        all.addEventListener("click", ()=>{
            this.renderOption = "All"; 
            this.renderData();
        });
    }   

    renderData() {
        this.renderProjects();
        this.renderTodos();
    }

    addProject() {
        const addProjectBtn = document.getElementById("addProject");
        addProjectBtn.addEventListener("click", () => {
            let name = prompt("What is your new project name?");
            if (name) {
                this.controller.addProject(name); 
                this.renderData();
            }
        });
    }

    renderTodos() {
        const todos = document.getElementById("todos"); 
        todos.innerHTML = "";
        this.controller.traverse(this.renderOption, (item, name) => {
            const tile = this.createTodoTile(item, name);
            todos.appendChild(tile);
        });
    }

    createTodoTile(item, name) {
        const tile = document.createElement("div");
        tile.className = "todo-tile";

        const statusDiv = document.createElement("div");
        statusDiv.className = "status-indicator";
        statusDiv.textContent = item.completed ? "Completed" : "Uncompleted";
        statusDiv.style.backgroundColor = item.completed ? "#00cf37" : "#cf0022";
        statusDiv.addEventListener("click", () => {
            item.changeCompleted();
        });

        
        const title = document.createElement("h3");
        title.textContent = item.title;

        
        const description = document.createElement("p");
        description.textContent = item.description;

        const dueDate = document.createElement("p");
        dueDate.textContent = `Due: ${item.dueDate}`;

       
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => {
            this.editTodoItem(item, name);
        });

        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            this.controller.deleteItem(name, item.id);
            this.renderData();
        });

        tile.append(statusDiv, title, description, dueDate, editBtn, deleteBtn);
        return tile;
    }

    editTodoItem(item, name) {
        const formContainer = document.getElementById("form-container");
        formContainer.classList.remove("hidden");
        document.getElementById("taskName").value = item.title;
        document.getElementById("description").value = item.description;
        document.getElementById("dueDate").value = item.dueDate;
        document.getElementById("priority").value = item.priority;
        document.getElementById("projectSelect").value = item.projectName || "Default";
        this.cache = [true, name, item.id]; 
    }

    addTask() {
        const addTaskBtn = document.getElementById("addTask");
        const form = document.getElementById("form-container"); 
        
        addTaskBtn.addEventListener("click", (event) => {
            event.stopPropagation();
            form.classList.toggle("hidden");
        });

        const closeFormBtn = document.getElementById("close-form"); 
        closeFormBtn.addEventListener("click", () => {
            form.classList.add("hidden");
        });
    }

    handleForm() {
        const formContainer = document.getElementById("form-container");
        const form = formContainer.querySelector("form");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("taskName").value;
            const description = document.getElementById("description").value;
            const dueDate = document.getElementById("dueDate").value;
            const priority = document.getElementById("priority").value;
            const projectName = document.getElementById("projectSelect").value;

            this.controller.addItem(projectName, name, description, dueDate, priority);
            form.reset(); 
            formContainer.classList.add("hidden");

            if (this.cache[0]) {
                console.log(this.cache);
                this.controller.deleteItem(this.cache[1], this.cache[2]);
                this.cache[0] = false;
            }
            this.renderData();
        });
    }

    renderProjects() {
        const projectSelect = document.getElementById("projectSelect");
        const projectList = document.getElementById("project-list"); 
        const allTasks = document.getElementById("allTasks");

        projectList.innerHTML = ""; 
        projectSelect.innerHTML = "";

        let tmp; 
        Object.keys(this.controller.projects).forEach(projectName => {
            if (projectName == "Default")
                tmp = projectName 
            else if (tmp != "Default")
                tmp = projectName;

            
            const option = document.createElement("option");
            option.value = projectName;
            option.textContent = projectName;
            projectSelect.appendChild(option);

            
            const li = document.createElement("li");
            li.textContent = projectName;
            li.addEventListener("click", () => {
                this.renderOption = projectName;
                this.renderData();
            });

            const renameBtn = document.createElement("button");
            renameBtn.textContent = "Rename";
            renameBtn.addEventListener("click", (e) => {
                e.stopPropagation(); 
                let newName = prompt("What's your project's new name?");
                if (newName) {
                    this.controller.renameProject(projectName, newName);
                    this.renderData();
                }
            });

            li.appendChild(renameBtn);
            projectList.appendChild(li);
        });

        projectSelect.value = tmp;
    }
}

export default View