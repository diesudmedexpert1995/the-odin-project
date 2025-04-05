import TreeNode from "./node.js";

/**
 * https://leetcode.com/explore/learn/card/recursion-i/
 * https://leetcode.com/explore/learn/card/recursion-ii/
 * https://leetcode.com/explore/learn/card/data-structure-tree/
 * https://leetcode.com/explore/learn/card/introduction-to-data-structure-binary-search-tree/
 * https://www.w3schools.com/dsa/dsa_data_binarysearchtrees.php
 * https://www.theodinproject.com  
 * https://www.w3schools.com/dsa/dsa_data_binarysearchtrees.php
 * https://www.freecodecamp.org/news/binary-tree-algorithms-for-javascript-beginners/
 * https://dev.to/mattdclarke/implement-depth-first-search-in-a-binary-search-tree-with-javascript-1p96
 */

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    buildTree(array){
        if (!array.length) {
            return null
        }

        const mid = Math.floor(array.length/2)
        const root = new TreeNode(array[mid])

        root.left = this.buildTree(array.slice(0,mid))
        root.right = this.buildTree(array.slice(mid+1))

        return root
    }

    prettyPrint(node, prefix="", isLeft=true){
        if (node === null) {
            return
        }

        if(node.right !== null){
            prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false)
        }

        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);

        if(node.left !== null){
            prettyPrint(node.right, `${prefix}${isLeft ? "    " : "│   "}`, true)
        }
    }

    insertItem(value){
        if (!this.root) {
            this.root = new TreeNode(value)
            return this.root
        }
        let currentNode = this.root
        while(currentNode){
            if(value < currentNode.value){
                if(!currentNode.left){
                    currentNode.left = new TreeNode(value)
                    break
                }
                currentNode = currentNode.left
            }else if(value > currentNode.value){
                if(!currentNode.right){
                    currentNode.right = new TreeNode(value)
                    break
                }
                currentNode = currentNode.right
            }else{
                break
            }
        }
        return this.root
    }

    deleteItem(value){
        return this._removeNode(this.root, value)
    }

    _removeNode(node, value){
        if(!node) return null
        if(value === node.value){
            if (!node.left && !node.right) {
                return null
            }
            
            if (!node.left) {
                return node.right
            }

            if(!node.right){
                return node.left
            }

            let temp = node.right
            
            while(temp.left){
                temp = temp.left
            }

            node.value = temp.value
            node.right = this._removeNode(node.left, value)
            return node

        }else if(value < node.value){
            node.left = this._removeNode(node.left, value)
            return node
        }else{
            node.right = this._removeNode(node.right, value)
            return node
        }
    }

    find(value){
        let currentNode = this.root
        while(currentNode.value !== value){
            if(value < currentNode.value){
                currentNode = currentNode.left
            }else{
                currentNode = currentNode.right
            }

            if(!currentNode) return null
        }
        return currentNode
    }

    levelOrder() {
        const tree = []
        const queue = [this.root]

        while (queue.length > 0) {
            const node = queue.shift()
            tree.push(node.value)

            if(node.left){
                queue.push(node.left)
            }

            if(node.right){
                queue.push(node.right)
            }
        }
        return tree
    }



    inOrder(){
        const treeArr = []
        const traverse = root => {
            if(root !== null){
                traverse(root.left)
                treeArr.push(root.value)
                traverse(root.right)
            }
        }
        traverse(this.root)
        return treeArr
    }

    preOrder(){
        const treeArr = []
        const traverse = root => {
            if(root !== null){
                treeArr.push(root.value)
                traverse(root.left)
                traverse(root.right)
            }
        }
        traverse(this.root)
        return treeArr
    }

    postOrder(){
        const treeArr = []
        const traverse = root => {
            if(root !== null){
                traverse(root.left)
                traverse(root.right)
                treeArr.push(root.value)
            }
        }
        traverse(this.root)
        return treeArr
    }

    height(node) {
        if(!node){
            return -1
        }else {
            return 1+Math.max(height(node.left)+height(node.right))
        }

    }

    depth(node){
        const traverseDepth = (node, currentDepth) =>{
            if (!node) {
                return currentDepth;
            } else {
                return traverseDepth(node.parent, currentDepth+1)
            }
        }
        return traverseDepth(node, 0)
    }

    isBalanced(node) {
        if(!node) {
            return true
        }

        const leftHeight = this.height(node.left)
        const rightHeight = this.height(node.right)

        if(Math.abs(leftHeight - rightHeight) > 1){
            return false
        }
        return this.isBalanced(node.left) && this.isBalanced(node.right)
    }

    rebalance(){
        const values = this.inOrder()
        this.root = this.buildTree(values)
    }
}

export default BinarySearchTree