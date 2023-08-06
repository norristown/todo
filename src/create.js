import globalArray from "./GlobalArray";

export function create() {
    const content = document.querySelector('.content');
    console.log('click CardJS', globalArray.get())
    content.innerHTML = '';
    for (let i = 0; i < globalArray.get().length; i++) {
        //Need Object not Array
        content.innerHTML +=
            `<div class="card-${i}" id="card">
                <div class="title">
                    <strong>Category</strong>: <span class="titleText">${globalArray.get()[i].Title}</span>
                </div>
                <div class="task"><strong>Tasks:</strong>
                    <p class="p-${i}">${globalArray.get()[i].Description} on ${globalArray.get()[i]['Due Date']}<br>
                    <strong>Priority: <span class="priority">${globalArray.get()[i].Priority}</span></strong>
                    </p>
                </div>

            <div class="btnContainer">
                <button class="add" id="${globalArray.get()[i].Title}">Add Task</button>
                <button class="delete">Delete</button>
            </div>
         </div>`;
    }

}


