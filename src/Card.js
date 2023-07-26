const globalArray = require('./GlobalArray')

class CreateCard {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    create() {
        const content = document.querySelector('.content');
        content.innerHTML = '';
        for (let i = 0; i < globalArray.Get().length; i++) {
            content.innerHTML +=
                `<div class="card">
                <div class="title">$</div>
                <div class="author">By $</div>
                <div class="pages">Pages: $</div>
                <div class="status">Status: $</div>
                <div class="btnContainer">
                    <button class="finishedReading">Finished Reading</button>
                    <button class="delBtn">Delete</button>
                </div>
             </div>`;
        }
    }
}
let createCard = new CreateCard()
module.exports = createCard