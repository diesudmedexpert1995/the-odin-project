

export { loadContent};


function loadContent(){



    const content = document.querySelector("#content");
    const mainHeader = document.createElement('h1');
    const description = document.createElement('p');

    while(content.firstChild){
        content.removeChild(content.firstChild)
    }
    
    mainHeader.innerHTML = "Welcome to the home of the best steak house in Kyiv!"
    
    content.appendChild(mainHeader)
    content.appendChild(description)
    
}

