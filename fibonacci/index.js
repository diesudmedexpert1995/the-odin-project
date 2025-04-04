import readline  from "readline-sync";

let n = parseInt(readline.question("Input number for fibonacci sequence: "))

function fibonacciIterative(number) {
    let n1 = 0, n2 = 1, nextTerm 
    
    console.log("Entered fibonacci number: "+number)
    nextTerm = n1+n2
    for (let i = 1; i < number; i++) {
            console.log("-> "+nextTerm)
            nextTerm = n1 + n2
            n1 = n2
            n2 = nextTerm
        
    }
    return nextTerm
}

function fibonacciRecursive(number) {
    if(number <= 2) return 1;
    else return fibonacciRecursive(number-1)+fibonacciRecursive(number-2)
}

const iterativeFibResult = fibonacciIterative(n)
const recursiveFibResult = fibonacciRecursive(n)

console.log("Iterative Fib() Result: "+iterativeFibResult)
console.log("Recursive Fib() Result: "+recursiveFibResult)
console.log("Is iterative and recursive results are save:" + (iterativeFibResult === recursiveFibResult))
