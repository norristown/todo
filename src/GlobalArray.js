class GlobalArray {
    constructor() {
        this.array = [];
    }

    add(item) {
        this.array.push(item);
    }
    get() {
        return this.array;
    }
    pop() {
        this.array.pop()
    }
    find(item) {
        this.array.find(o => o)
    }
    splice(index, num) {
        this.array.splice(index, num)
    }
    taskArr(i) {
        this.array[i].Description
    }
}

let globalArray = new GlobalArray()
module.exports = globalArray;