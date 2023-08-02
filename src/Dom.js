const globalArray = require('./GlobalArray')
import Card from './Card'
import Project from './Project'
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
                    p.textContent = `${newTask.value} at ${newDate.value}`
                    task.appendChild(p)
                    newTask.remove()
                    newBtn.remove()
                    newDate.remove()
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
                this.create()
                // const b = new Card
                // b.create()
                modalWindow.classList.add('hidden')
                const a = new Project
                a.loadWindow()
                const x = new Dom
                x.domStuff()

                this.addToProject()

            })
        })
    }

    create() {
        console.log('click DomJS', globalArray.get())
        const content = document.querySelector('.content');
        content.innerHTML = '';
        for (let i = 0; i < globalArray.get().length; i++) {
            //Need Object not Array
            content.innerHTML +=
                `<div class="card">
                    <div class="title">
                        <p><strong>Category</strong>: ${globalArray.get()[i].Title}</p>
                    </div>
                    <div class="task">
                        <p><strong>Tasks</strong>: ${globalArray.get()[i].Description} at ${globalArray.get()[i]['Due Date']}</p>
                    </div>

                <div class="priority"><strong>Priority</strong>: ${globalArray.get()[i].Priority}</div>
                <div class="btnContainer">
                    <button class="add" id="${globalArray.get()[i].Title}">Add Task</button>
                    <button class="delete">Delete</button>
                </div>
             </div>`;
        }
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