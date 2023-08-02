const globalArray = require('./GlobalArray')
const Card = require('./Card')
import Project from './Project'
export default class Dom {

    domStuff() {

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
        const delButton = document.querySelectorAll('.delete')
        delButton.forEach((button, index) => {
            button.addEventListener('click', (e) => {
                e.target.parentNode.parentNode.remove();
                
                globalArray.get().splice(index, 1)
                
                
                
                console.log(globalArray.get())
                
               

                // this.addToProject()

            })
        })
        
        

    }

    create() {
        const content = document.querySelector('.content');
        console.log('click', globalArray.get())
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

    // addToProject() {
    //     console.log('ADD ADDD ADDDDDD')
    //     const project = document.querySelector('.sidebar-item-2')
    //     const navText = project.querySelector('.navText')

    //     // project.appendChild(thingyUl)
    //     // const thingyLi = document.createElement('li')
    //     navText.querySelector('p').innerHTML = "Projects"
    //     for (let i = 0; i < globalArray.get().length; i++) {
    //         const thingyLi = document.createElement('div')
    //         thingyLi.textContent = globalArray.get()[i].Title

    //         navText.querySelector('p').appendChild(thingyLi)
    //     }
    // }
}