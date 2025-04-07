class Calculator {
    add(a,b){
        return a+b
    }
    substruct (a,b){
        return a-b
    }

    multiply(a,b){
        return a*b
    }

    divide (a,b){
        try {
            return a/b
        } catch (error) {
            throw new Error("Exception: dividing by 0");
        }
        
        
    }

    modulo(a,b){
        try {
            return a%b
        } catch (error) {
            throw new Error("Exception: modulo by 0")
        }
    }
}
export default Calculator