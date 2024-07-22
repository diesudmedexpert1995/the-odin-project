const inputValue = document.getElementById("user-input");

const number = document.querySelectorAll(".numbers").forEach(function(item){
    item.addEventListener("click", function(e){
        if (inputValue.innerHTML === "NaN" || inputValue.innerHTML === "0") {
            inputValue.innerHTML = ""
        }
        inputValue.innerText += e.target.innerHTML.trim(); 
    });
})

const calculate = document.querySelectorAll(".operations").forEach(function(item){
    item.addEventListener("click", function(e){
        console.log(e.target.innerHTML);
        let lastValue = inputValue.innerText.substring(inputValue.innerText.length, inputValue.innerText.length-1);
        if (!isNaN(lastValue) && e.target.innerHTML === "=") {
            inputValue.innerText = eval(inputValue.innerHTML)
        }else if (e.target.innerHTML.includes('%')){
            inputValue.innerHTML = parseFloat(inputValue.innerText/100);
        }         
        else if (e.target.innerHTML === "AC") {
            inputValue.innerText = 0;
        } else if (e.target.innerHTML === "DEL") {
            inputValue.innerText = inputValue.innerHTML.substring(0, inputValue.innerText.length-1);
            if(inputValue.innerText.length === 0) inputValue.innerText = 0;
        }  
        else {
            if (!isNaN(lastValue)) {
                inputValue.innerText += e.target.innerHTML;
            }
        }
    });
});