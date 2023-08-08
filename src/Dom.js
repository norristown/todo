const globalArray = require('./GlobalArray')
import Project from './Project'
import { format } from 'date-fns'
const create = require('./create')

export default class Dom {

    domStuff() {
        this.addToProject()
        this.add()
        this.delete()
        this.taskFunctions()
    }

    add() {
        const add = document.querySelectorAll('.add')
        add.forEach(button => {
            button.addEventListener('click', (e) => {

                const parent = e.target.parentElement.parentElement
                console.log(parent)
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

                const br = document.createElement('br')
                task.appendChild(br)

                const newBtn = document.createElement('button')
                newBtn.textContent = 'Add'
                task.appendChild(newBtn)

                const cancel = document.createElement('button')
                cancel.textContent = 'Cancel'
                task.appendChild(cancel)

                cancel.addEventListener('click', () => {
                    newTask.remove()
                    newBtn.remove()
                    newDate.remove()
                    priority.remove()
                    br.remove()
                    cancel.remove()
                })

                newBtn.addEventListener('click', () => {

                    const formattedTime = format(new Date(newDate.value), "iiii MMMM dd, yyyy' at 'h:mm b")
                    const p = document.createElement('p')
                    p.setAttribute('id', 'p')
                    p.innerHTML = `
                    ${newTask.value} on ${formattedTime}<br><strong>Priority: <span class="priority">${priority.value}</span></strong><div class="imgContainer">
                    <img src="${this.createIcon('accept.png')}" class="accept">
                    <img src="${this.createIcon('remove.png')}" class="remove">
                    </div>`
                    task.appendChild(p)
                    newTask.remove()
                    newBtn.remove()
                    newDate.remove()
                    priority.remove()

                    const taskArr = globalArray.get()[e.target.parentElement.previousElementSibling.previousElementSibling.className].Description
                    const dueDateArr = globalArray.get()[e.target.parentElement.previousElementSibling.previousElementSibling.className]['Due Date']
                    const priorityArr = globalArray.get()[e.target.parentElement.previousElementSibling.previousElementSibling.className].Priority
                    taskArr.push(newTask.value)
                    dueDateArr.push(formattedTime)
                    priorityArr.push(priority.value)

                    create.create()
                    const a = new Project
                    a.loadWindow()
                    this.domStuff()

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
                console.log(globalArray.get())
                modalWindow.classList.add('hidden')
                const a = new Project
                a.loadWindow()
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

    createIcon(iconPath) {
        let img = require(`./icons/${iconPath}`)
        const picture = document.createElement('img')
        picture.src = img
        return img
    }

    taskFunctions() {
        const accept = document.querySelectorAll('.accept')
        const remove = document.querySelectorAll('.remove')

        accept.forEach((button, index) => {
            button.addEventListener('click', () => {
                console.log('accept', index)
            })
        })

        remove.forEach((button) => {
            button.addEventListener('click', (e) => {
                console.log('remove', e.target.parentElement.parentElement.parentElement.previousElementSibling.className)
                console.log('p', e.target.parentElement.parentElement )
    
                const taskArr = globalArray.get()[e.target.parentElement.parentElement.parentElement.previousElementSibling.className].Description
                const dueDateArr = globalArray.get()[e.target.parentElement.parentElement.parentElement.previousElementSibling.className]['Due Date']
                const priorityArr = globalArray.get()[e.target.parentElement.parentElement.parentElement.previousElementSibling.className].Priority
                taskArr.splice(e.target.parentElement.parentElement.className, 1)
                dueDateArr.splice(e.target.parentElement.parentElement.className, 1)
                priorityArr.splice(e.target.parentElement.parentElement.className, 1)
                create.create()
                const a = new Project
                a.loadWindow()
                this.domStuff()
            })
        })
    }
}