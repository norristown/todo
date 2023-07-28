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
                text: 'Today',
                icon: this.createIcon('calendar-check.png')
            },
            {
                text: 'Next 7 Days',
                icon: this.createIcon('calendar-end.png')
            },
            {
                text: 'Projects',
                icon: this.createIcon('ruler-square.png')
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
}