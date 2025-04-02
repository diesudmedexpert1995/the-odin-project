import Item  from "./Item";

class Project {
    constructor(name) {
        this.name = name
        this.items = []
    }

    addItem(title, description, dueDate, priority){
        this.items.push(new Item(title, description, dueDate, priority))
    }

    deleteItem(id){
        this.items = this.items.filter((item)=> item.id === id)
    }

    updateItem(id, title, description, dueDate, priority, completed) {
        let findedItem = this._findItem(id)
        findedItem.title = title;
        findedItem.description = description;
        findedItem.dueDate = dueDate;
        findedItem.priority = priority;
        findedItem.completed = completed;
        this.items.splice(id, 1, findedItem)
    }

    _findItem(id){
        let findedItem
        this.items.forEach((item)=>{
            if (item.id === id) {
                findedItem = item
            }
        })
        return findedItem
    }
}

export default Project