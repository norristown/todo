import './style.css'
// import Module from './module'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Project from './Project'


const page = new Navbar
const sidebar = new Sidebar


sidebar.createSidebar()
page.createNavbar()
const project = new Project
const addClick = document.querySelector('.li-container-2')
addClick.addEventListener('click', project.addProjectClick)

const content = document.querySelector('.content')
const homeText = document.createElement('h1')
homeText.textContent = 'Click Add Project To Get Started'
homeText.classList.add('home-text')
content.appendChild(homeText)






