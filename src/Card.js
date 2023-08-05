const globalArray = require('./GlobalArray')

class CreateCard {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;

        this.obj = {
            'Title': this.title,
            'Description': this.description,
            'Due Date': this.dueDate,
            'Priority': this.priority
        }
        
        globalArray.add(this.obj)

    }

    create() {
        const content = document.querySelector('.content');
        console.log('click CardJS', globalArray.get())
        content.innerHTML = '';
        for (let i = 0; i < globalArray.get().length; i++) {
            //Need Object not Array
            content.innerHTML +=
                `<div class="card-${i}" id="card">
                    <div class="title">
                        <p><strong>Category</strong>: ${globalArray.get()[i].Title}</p>
                    </div>
                    <div class="task"><strong>Tasks:</strong>
                        <p>${globalArray.get()[i].Description} on ${globalArray.get()[i]['Due Date']}<br>
                            <strong>Priority</strong>: ${globalArray.get()[i].Priority}
                        </p>
                    </div>

                <div class="btnContainer">
                    <button class="add" id="${globalArray.get()[i].Title}">Add Task</button>
                    <button class="delete">Delete</button>
                </div>
             </div>`;
        }

    }
}
// let createCard = new CreateCard()
module.exports = CreateCard