
export {createMenu}

// appending each div to the content box aka menu item to content box.

function createMenu(){
    const content = document.querySelector("#content");
    const mainHeader = document.createElement('h1');

    while(content.firstChild){
        content.removeChild(content.firstChild)
    }

    mainHeader.innerHTML = "Our Menu"
    content.appendChild(mainHeader)

    for(let i = 0; i < 3; i++){

            // Creation of Elements
        const div = document.createElement('div')
        const description = document.createElement('p');
        const img = document.createElement('img');
        const h3 = document.createElement("h3")

        // Giving elements class names
        div.className = `menu${i+1}`
        h3.className = `name${i+1}`
        description.className = `item${i+1}`
        img.className = `img${i+1}`



        // appending to elements
        content.appendChild(div)
        div.appendChild(h3)
        div.appendChild(description)
        div.appendChild(img)
        
        

    }

    const item1Header = document.querySelector(".name1")
    const item2Header = document.querySelector(".name2")
    const item3Header = document.querySelector(".name3")

    const item1Des = document.querySelector(".item1")
    const item2Des = document.querySelector(".item2")
    const item3Des = document.querySelector(".item3")

    const item1Img = document.querySelector(".img1")
    const item2Img = document.querySelector(".img2")
    const item3Img = document.querySelector(".img3")

    item1Header.innerHTML = "Classic BBQ"
    item2Header.innerHTML = "Spicy Chopped BBQ"
    item3Header.innerHTML = "BBQ Bacon Chopped Cheese"

    item1Des.innerHTML = "Time to meat your BBQ destiny! Barbecue is a celebration of fire and smoke, and the flavors they bring to the table."
    item2Des.innerHTML = "A great barbecue is a tribute to the backyard heroes who put in the hours to perfect their craft.Nothing brings people together quite like the aroma of a smoldering grill and the promise of a delicious feast."
    item3Des.innerHTML = "A smoky twist featuring chopped beef glazed with tangy BBQ sauce, crispy bacon strips, cheddar cheese, and crunchy onions, all packed into a soft, toasted bun."

    item1Img.src = "https://mamaslatinas.com/wp-content/uploads/2024/10/featured-img-of-post-152543-1536x864.jpg"
    item2Img.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPIZdpbtOYVT34emD04t82YoJ_dce_uPe7JnFmvt44xdnp9tt3uvz6FLKcmTeOu9mSJ4Nc-rdlfKaRhehwF7paPPb6oVDT3vpYQEapuUh1-fnUwIErHKejWL586eYDPDqfZtNwgaUhBGUt/s640/SweetChiliMain.jpg"
    item3Img.src = "https://saucedupfoods.com/wp-content/uploads/2024/09/1DS_1017-1024x683.jpg"
}

