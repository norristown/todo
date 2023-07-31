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
    find(title) {
        this.array.find(o => o.Title === title)
    }
    splice(index, num) {
        this.array.splice(index, num)
    }
}

let globalArray = new GlobalArray()
module.exports = globalArray;