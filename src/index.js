import './style.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Project from './Project'
const seven = require('./next7Days')

const page = new Navbar
const sidebar = new Sidebar
const content = document.querySelector('.content')

sidebar.createSidebar()
page.createNavbar()
const project = new Project
const addClick = document.querySelector('.li-container-2')
project.loadWindow()
addClick.addEventListener('click', () => {
    project.click()
})

const homeText = document.createElement('h1')
homeText.textContent = 'Click Add Project To Get Started'
homeText.classList.add('home-text')
content.appendChild(homeText)

sidebar.sideBarSelect()
const sevenBtn = document.querySelector('.sidebar-item-2')
sevenBtn.addEventListener('click', seven.next7Days)