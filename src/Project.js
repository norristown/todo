import Dom from './Dom'
// const globalArray = require('./GlobalArray')
// const createCard = require('./Card')
const Card = require('./Card')
import { format } from 'date-fns'
import globalArray from './GlobalArray'
const create = require('./create')

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
            console.log('x')
        })

        const form = document.createElement('form')
        form.setAttribute('onsubmit', ' ')

        modalWindow.appendChild(form)

        const formInputs = ['Category', 'Task: ', 'Due Date: ']

        for (let i = 0; i < formInputs.length; i++) {
            const label = document.createElement('label')
            label.textContent = formInputs[i]
            form.appendChild(label)
            const input = document.createElement('input')
            input.classList.add(`input-${[i]}`)
            form.appendChild(input)
            form.appendChild(document.createElement('br'))
        }

        const priorityValues = ['Very Important', 'Important', 'Least Important']
        const priority = document.createElement('select')
        priority.setAttribute('id', 'priority')
        const label = document.createElement('label')
        label.textContent = 'Priority: '
        form.appendChild(label)
        for (let i = 0; i < 3; i++) {
            const option = document.createElement('option')
            option.setAttribute('value', priorityValues[i])
            option.setAttribute('id', `option-${i}`)
            option.textContent = priorityValues[i]
            priority.appendChild(option)
            form.appendChild(priority)
        }

        form.appendChild(document.createElement('br'))
        const submit = document.createElement('input')
        submit.value = 'Create New Project'
        submit.setAttribute('id', 'submit')
        submit.setAttribute('type', 'submit')
        form.appendChild(submit)

        const date = document.querySelector('.input-2')
        date.setAttribute('type', 'datetime-local')

        //Submit Data
        //---------------------------------------------------------------------------FIX THIS----------------------------------------------------------------------------------
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            const selectedDateTime = format(new Date(date.value), "iiii MMMM dd, yyyy' at 'h:mm b")
            // create.create()
            const card = new Card(document.querySelector('.input-0').value, document.querySelector('.input-1').value, selectedDateTime, document.querySelector('#priority').value)
            card.create
            // for (let i = 0; i < globalArray.get().length; i++) {
            //     card.create
            // }
            // const modalWindow = document.querySelector('#modal')
            // modalWindow.classList.add('hidden')
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