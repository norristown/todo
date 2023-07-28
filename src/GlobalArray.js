class GlobalArray {
    constructor() {
        this.array = [];
    }

    Add(item) {
        this.array.push(item);
    }
    Get() {
        return this.array;
    }
    Pop() {
        this.array.pop()
    }
}

let globalArray = new GlobalArray()
module.exports = globalArray;