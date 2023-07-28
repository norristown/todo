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
        globalArray.Add(this.obj)

    }

    create() {
        const content = document.querySelector('.content');
        console.log('click', globalArray.Get())
        content.innerHTML = '';
        for (let i = 0; i < globalArray.Get().length; i++) {
            //Need Object not Array
            content.innerHTML +=
                `<div class="card">
                <div class="title">Title: ${globalArray.Get()[i].Title}</div>
                <div class="description">Task: ${globalArray.Get()[i].Description}</div>
                <div class="due-date">Due Date: ${globalArray.Get()[i]['Due Date']}</div>
                <div class="priority">Priority: ${globalArray.Get()[i].Priority}</div>
                <div class="btnContainer">
                    <button class="finishedReading">Add Task/button>
                    <button class="delBtn">Delete</button>
                </div>
             </div>`;
        }
    }
}
// let createCard = new CreateCard()
module.exports = CreateCard