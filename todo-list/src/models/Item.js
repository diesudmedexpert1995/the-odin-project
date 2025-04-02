class Item {
    constructor(title, description, dueDate, priority) {
        this.id = crypto.randomUUID()
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.completed = false
    }
    
    changeTitle(newTitle) {
        //oldTitle = this.title;
        this.title = newTitle;
        //return oldTitle; 
    }

    changeDescription(newDescription) {
        //oldDescription = this.description;
        this.description = newDescription;
        //return oldDescription; 
    }

    changePriority(newPriority) {
        //oldPriority = this.priority;
        this.priority = newPriority;
        //return oldPriority; 
    }

    changeCompleted() {
        if (arguments.length == 0) 
            this.completed = !this.completed;
        else this.completed = arguments[0];
    }
    
    
}

export default Item