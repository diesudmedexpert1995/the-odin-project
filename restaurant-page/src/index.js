alert("Welcome to restaurant page.")


import { loadContent } from "./content.js"
import { createMenu } from "./menu.js";
import { createContact } from "./contact.js"
import './styles.css';


const homeButton = document.querySelector(".home")
const menuButton = document.querySelector(".menu")
const contactButton = document.querySelector(".about")

loadContent();
homeButton.addEventListener("click", loadContent);
menuButton.addEventListener("click", createMenu);
contactButton.addEventListener("click", createContact);
