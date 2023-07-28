const globalArray = require('./GlobalArray')

export default class Dom {

    domStuff() {
        const project = document.querySelector('.sidebar-item-2')
        // const projectChild = project.querySelector('.navText')
        const thingyUl = document.createElement('ul')
        project.appendChild(thingyUl)
        const thingyLi = document.createElement('li')
        thingyLi.textContent = 'globalArray.Get()[0].Title'
        thingyUl.appendChild(thingyLi)


    }
}