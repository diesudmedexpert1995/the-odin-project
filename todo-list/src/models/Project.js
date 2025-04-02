import Item from "./Item";
class Project {
    constructor(name) {
        this.name = name; 
        this.items = []; 
    }

    addItem(title, description, dueDate, priority, completed) {
        this.items.push(new Item(title, description, dueDate, priority, completed)); 
    }

    deleteItem(id) {
        console.log(id);
        
        this.items = this.items.filter( (item) => 
            item.id != id)
    }

    updateItem(id, title, description, dueDate, priority, completed) {
        if (item.id === id) {
            item.title = title;
            item.description = description;
            item.dueDate = dueDate;
            item.priority = priority;
            item.completed = completed;
        }
    }

    _findItem(id){
        let finded
        this.items.forEach((item) => {
            if(item.id === id) finded = item
        });
        return finded
    }
}

export default Project