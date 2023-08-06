const globalArray = require('./GlobalArray')
import Project from './Project'
import { format } from 'date-fns'
const create = require('./create')

export default class Dom {

    domStuff() {

        this.addToProject()
        this.add()
        this.delete()
    }

    add() {
        const add = document.querySelectorAll('.add')
        add.forEach(button => {
            button.addEventListener('click', (e) => {

                const parent = e.target.parentElement.parentElement
                const task = parent.querySelector('.task')
                const newTask = document.createElement('input')
                document.activeElement.blur()
                newTask.setAttribute('autofocus', true)
                newTask.setAttribute('id', 'add-task')
                const newDate = document.createElement('input')
                newDate.setAttribute('type', 'datetime-local')
                task.appendChild(newTask)
                task.appendChild(newDate)

                const priorityValues = ['Very Important', 'Important', 'Least Important']
                const priority = document.createElement('select')
                priority.setAttribute('id', 'priority')
                for (let i = 0; i < 3; i++) {
                    const option = document.createElement('option')
                    option.setAttribute('value', priorityValues[i])
                    option.textContent = priorityValues[i]
                    priority.appendChild(option)
                    task.appendChild(priority)
                }

                task.appendChild(document.createElement('br'))

                const newBtn = document.createElement('button')
                newBtn.textContent = 'Add'
                task.appendChild(newBtn)

                newBtn.addEventListener('click', () => {
                    const p = document.createElement('p')
                    p.innerHTML = `${newTask.value} at ${format(new Date(newDate.value), "MM-dd-yyyy' at 'h:mm b")}<br><strong>Priority: <span class="priority">${priority.value}</span></strong>`
                    task.appendChild(p)
                    newTask.remove()
                    newBtn.remove()
                    newDate.remove()
                    priority.remove()
                })
            })
        })
    }

    delete() {
        const modalWindow = document.querySelector('#modal')
        const delButton = document.querySelectorAll('.delete')
        delButton.forEach((button, index) => {
            button.addEventListener('click', (e) => {
                e.target.parentNode.parentNode.remove();
                globalArray.get().splice(index, 1)
                console.log('create.create')
                create.create()
                modalWindow.classList.add('hidden')
                const a = new Project
                a.loadWindow()
                const x = new Dom
                x.domStuff()
                this.addToProject()
            })
        })
    }

    addToProject() {
        console.log('ADD ADDD ADDDDDD')
        const project = document.querySelector('.sidebar-item-2')
        const navText = project.querySelector('.navText')

        // project.appendChild(thingyUl)
        // const thingyLi = document.createElement('li')
        navText.querySelector('p').innerHTML = "Projects"
        for (let i = 0; i < globalArray.get().length; i++) {
            const thingyLi = document.createElement('div')
            thingyLi.textContent = globalArray.get()[i].Title

            navText.querySelector('p').appendChild(thingyLi)
        }
    }
}