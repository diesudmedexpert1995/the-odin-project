import './styles.css';

import MainController from './controllers/MainController';

import View from "./views/View";

const mainController = new MainController()

//const project1 = new Project("New Project 1")

//project1.addItem("New Title 1", "New Description 1", format(new Date(2025, 3, 11), "MM/dd/yyyy"), "High")
//project1.addItem("New Title 2", "New Description 2", format(new Date(2025, 3, 13), "MM/dd/yyyy"), "Low")
//project1.addItem("New Title 3", "New Description 3", format(new Date(2025, 4, 1), "MM/dd/yyyy"), "Medium")

//project1.items.forEach(item => console.log(item))

//mainController.addProject(project1)
// console.log(mainController.projects)

const view  = new View(mainController)