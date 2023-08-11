export default class Sidebar {
    constructor(text, icon, className) {
        this.text = text;
        this.icon = icon;

        this.element = document.createElement('li')
        this.element.className = className;
        this.element.id = 'side-container'
        this.element.innerHTML = `

            
            <div class="navText">
            <img class="icon" src="${icon}">
               <p> ${text} </p>
            </div>
        `
    }

    createDiv(className, inner) {
        const element = document.createElement('div')
        element.className = className
        element.innerHTML = inner
        return element
    }

    createSidebar () {
        const sidebarContent = [
            {
                text: 'All Projects',
                icon: this.createIcon('ruler-square.png')
            },
            {
                text: 'Due Today',
                icon: this.createIcon('calendar-check.png')
            },
            {
                text: 'Next 7 Days',
                icon: this.createIcon('calendar-end.png')
            }
        ];

        const sidebarContainer = document.querySelector('.sidebar-container')

        for (let i = 0; i < sidebarContent.length; i++) {
            const sidebarItem = new Sidebar(sidebarContent[i].text, sidebarContent[i].icon, `sidebar-item-${i}`)
            sidebarContainer.appendChild(sidebarItem.element)
        }
    }

    createIcon(iconPath) {
        let img = require(`./icons/${iconPath}`)
        const picture = document.createElement('img')
        picture.src = img
        return img
    }

    sideBarSelect() {
        const allProjects = document.querySelector('.sidebar-item-0')
        const today = document.querySelector('.sidebar-item-1')
        const seven = document.querySelector('.sidebar-item-2')
   
        allProjects.addEventListener('click', () => {
            allProjects.style.backgroundColor = '#525252'
            today.style.backgroundColor = 'orange'
            seven.style.backgroundColor = 'orange'
        })

        today.addEventListener('click', () => {
            allProjects.style.backgroundColor = 'orange'
            today.style.backgroundColor = '#525252'
            seven.style.backgroundColor = 'orange'
        })

        seven.addEventListener('click', () => {
            allProjects.style.backgroundColor = 'orange'
            today.style.backgroundColor = 'orange'
            seven.style.backgroundColor = '#525252'
        })

        
    }
}