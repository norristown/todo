import Dom from './Dom'
const globalArray = require('./GlobalArray')
// const createCard = require('./Card')
const Card = require('./Card')

export default class Project {


    loadWindow() {

        //Create Form
        const content = document.querySelector('.content')
        const modalWindow = document.createElement('div')
        modalWindow.className = 'modal hidden'
        modalWindow.setAttribute('id', 'modal')
        content.appendChild(modalWindow)

        const h2 = document.createElement('h2')
        h2.textContent = 'Add Project'
        modalWindow.appendChild(h2)

        const closeButton = document.createElement('button')
        closeButton.textContent = '\u00D7'
        closeButton.classList.add('close-modal')
        modalWindow.appendChild(closeButton)
        closeButton.addEventListener('click', () => {
            modalWindow.classList.add('hidden')
        })

        const form = document.createElement('form')
        form.setAttribute('onsubmit', ' ')

        modalWindow.appendChild(form)

        const formInputs = ['Category: ', 'Task: ', 'Due Date: ', 'Priority: ']

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

        const date = document.querySelector('.input-2')
        date.setAttribute('type', 'datetime-local')
        date.addEventListener('change', () => {
            const selectedDateTime = date.value
            console.log(selectedDateTime)
        })

        
        //Submit Data
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            const card = new Card(
                document.querySelector('.input-0').value,
                document.querySelector('.input-1').value,
                document.querySelector('.input-2').value,
                document.querySelector('.input-3').value
            )
            card.create()
            modalWindow.classList.add('hidden')
            this.loadWindow()
            const x = new Dom
            x.domStuff()
        })

    }

    click() {
        const modalWindow = document.querySelector('#modal')
        modalWindow.classList.remove('hidden')
    }


}