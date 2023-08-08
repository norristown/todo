import globalArray from "./GlobalArray";

export function create() {
    const content = document.querySelector('.content');
    content.innerHTML = '';
    for (let i = 0; i < globalArray.get().length; i++) {
    
        const cardDiv = document.createElement('div')
        cardDiv.setAttribute('id', 'card')
        content.appendChild(cardDiv)

        const titleDiv = document.createElement('div')
        titleDiv.className = [i]
        titleDiv.setAttribute('id', 'title')
        titleDiv.setAttribute('value', `${globalArray.get()[i].Title}`)
        titleDiv.innerHTML = `<strong>Category</strong>: <span class="titleText">${globalArray.get()[i].Title}</span>`
        cardDiv.appendChild(titleDiv)

        const taskDiv = document.createElement('div')
        taskDiv.className = 'task'
        taskDiv.textContent = 'Tasks: '
        cardDiv.appendChild(taskDiv)

        for (let j = 0; j < globalArray.get()[i].Description.length; j++) {
            console.log('j loop')
            const pDiv = document.createElement('div')
            pDiv.setAttribute('id', 'p')
            pDiv.innerHTML = `
            ${globalArray.get()[i].Description[j]} on ${globalArray.get()[i]['Due Date'][j]}<br>
                    <strong>Priority: <span class="priority">${globalArray.get()[i].Priority[j]}</span></strong> 
                    <div class="imgContainer">
                        <img src="${createIcon('accept.png')}" class="accept">
                        <img src="${createIcon('remove.png')}" class="remove">
                    </div>
                </div>`

            taskDiv.appendChild(pDiv)
        }
        
        const btnContainer = document.createElement('div')
        btnContainer.className = 'btnContainer'
        btnContainer.innerHTML = `
        <button class="add" id="${globalArray.get()[i].Title}">Add Task</button>
        <button class="delete">Delete</button>`
        cardDiv.appendChild(btnContainer)
    }

    function createIcon(iconPath) {
        let img = require(`./icons/${iconPath}`)
        const picture = document.createElement('img')
        picture.src = img
        return img
    }
}