import './style.css'
// import Module from './module'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Project from './Project'


const page = new Navbar
const sidebar = new Sidebar

page.createNavbar()
sidebar.createSidebar()

const project = new Project
const addClick = document.querySelector('.li-container-2')
addClick.addEventListener('click', project.addProjectClick)








