import BinarySearchTree from "./tree.js";

const binarySearchTree = new BinarySearchTree();

console.log(binarySearchTree.buildTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

console.log(binarySearchTree.insertItem(51));
console.log(binarySearchTree.insertItem(33));
console.log(binarySearchTree.insertItem(120));
console.log(binarySearchTree.insertItem(41));
console.log(binarySearchTree.insertItem(17));
console.log(binarySearchTree.insertItem(-6));
console.log(binarySearchTree.insertItem(-8));

binarySearchTree.deleteItem(8);

console.log(binarySearchTree.find(41));
console.log(binarySearchTree.find(5));

console.log(binarySearchTree.levelOrder());

console.log(binarySearchTree.inOrder());
console.log(binarySearchTree.preOrder());
console.log(binarySearchTree.postOrder());

console.log(binarySearchTree.height(binarySearchTree.find(5)));
console.log(binarySearchTree.height(binarySearchTree.find(3)));

console.log(binarySearchTree.depth(binarySearchTree.find(7)));
console.log(binarySearchTree.depth(binarySearchTree.find(120)));

console.log(binarySearchTree.isBalanced(binarySearchTree.find(120)));

binarySearchTree.rebalance();