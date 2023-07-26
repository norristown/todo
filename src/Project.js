
const globalArray = require('./GlobalArray')
const createCard = require('./Card')
export default class Project {


    addProjectClick() {

        //Create Form
        const content = document.querySelector('.content')
        const modalWindow = document.createElement('div')
        modalWindow.classList.add('modal')
        content.appendChild(modalWindow)

        const h2 = document.createElement('h2')
        h2.textContent = 'Add Project'
        modalWindow.appendChild(h2)

        const closeButton = document.createElement('button')
        closeButton.textContent = '\u00D7'
        closeButton.classList.add('close-modal')
        modalWindow.appendChild(closeButton)
        closeButton.addEventListener('click', () => {
            modalWindow.remove()
        })

        const form = document.createElement('form')
        form.setAttribute('onsubmit', ' ')

        modalWindow.appendChild(form)

        const formInputs = ['Title: ', 'Description: ', 'Due Date: ', 'Priority: ']

        for (let i = 0; i < formInputs.length; i++) {
            const label = document.createElement('label')
            label.textContent = formInputs[i]
            form.appendChild(label)
            const input = document.createElement('input')
            input.classList.add(`input-${[i]}`)
            form.appendChild(input)
            form.appendChild(document.createElement('br'))
        }

        const submit = document.createElement('input')
        submit.value = 'Create New Project'
        submit.setAttribute('type', 'submit')

        form.appendChild(submit)
        //Submit Data
        submit.addEventListener('click', (e) => {
            e.preventDefault()

            for(let i = 0; i < formInputs.length; i++) {
                globalArray.Add(document.querySelector(`.input-${i}`).value)
            }
            


            // const [title, description, dueDate, priority] = x.projectArray
            // const obj = { title, description, dueDate, priority }
            console.log(globalArray.Get(), 'get', globalArray.Get().length) 
            
            createCard.create()
        })

    }
}