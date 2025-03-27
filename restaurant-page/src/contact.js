export { createContact }


function createContact() {
    const content = document.querySelector("#content");
    const mainHeader = document.createElement('h1');

    while(content.firstChild){
        content.removeChild(content.firstChild)
    }


    mainHeader.innerHTML = "Contact us"

    content.appendChild(mainHeader)


    const div1 = document.createElement("div")
    content.appendChild(div1)
    const phone = document.createElement("p")
    const email = document.createElement("p")
    const name = document.createElement("h3")
    div1.className = "contactCard"
    name.innerHTML = "<strong>Owner:</strong> Brovary Meat factory"
    phone.innerHTML = "<strong>Phone:</strong> 38097-BBQ-MEAT"
    email.innerHTML = "<strong>Email:</strong> exampley@example.com"

    div1.appendChild(name)
    div1.appendChild(phone)
    div1.appendChild(email)
}
