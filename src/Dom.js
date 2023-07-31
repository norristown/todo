const globalArray = require('./GlobalArray')

export default class Dom {

    domStuff() {
        this.addToProject()
        this.add()
        this.delete()
    }

    add() {
        const add = document.querySelector('.add')
        add.addEventListener('click', (e) => {
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
    }

    delete() {
        const delButton = document.querySelectorAll('.delete')
        delButton.forEach((button, index) => {
            button.addEventListener('click', (e) => {
                e.target.parentNode.parentNode.remove();
                globalArray.splice(index, 1)
                console.log(globalArray.get(), index)
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