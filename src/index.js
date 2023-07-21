import './style.css'
// import Module from './module'
import Navbar from './navbar'
import Sidebar from './sidebar'

const page = new Navbar
const sidebar = new Sidebar

page.createNavbar()
sidebar.createSidebar()
