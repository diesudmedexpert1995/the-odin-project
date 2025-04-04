// using an example from this article: https://omken.medium.com/mastering-linked-lists-in-javascript-95c35a9b99e6

class ListNode {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    insertAfter(data) {
        const newNode = new ListNode(data)
        if(!this.head){
            this.head = newNode
        }else {
            let current = this.head
            while (current.next != null) {
                current = current.next
            }
            current.next = newNode
        }
    }

    insertBefore(data) {
        const newNode = new ListNode(data)
        newNode.next = this.head
        this.head = newNode 
    }

    delete(data){
        if(!this.head){
            return ;
        }

        if(this.head.data === data){
            this.head = this.head.next
            return
        }

        let current = this.head
        
        while(current.next !== null){
            if(current.next.data === data){
                current.next = current.next.next
                return
            }
            current = current.next
        }
    }
    search(data) {
        let current = this.head
        while (current !== null){
            if(current.data === data){
                return true
            }
            current = current.next
        }
        return false
    }

    print() {
        let current = this.head
        const res = []
        while(current !== null){
            res.push(current.data)
            current = current.next
        }
        console.log(res.join(' -> '))
    }
}

const linkedList = new LinkedList();
linkedList.insertAfter(10);
linkedList.insertAfter(20);
linkedList.insertAfter(30);
linkedList.print()
linkedList.insertBefore(5);
linkedList.print()
console.log('Is 10 in list: '+linkedList.search(10)); 
console.log('Is 50 in list: '+linkedList.search(50));
linkedList.print(); 
linkedList.delete(20);
linkedList.print();