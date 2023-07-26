const globalArray = require('./GlobalArray')

class Print {
    PrintGlobalArray() {
        let array = globalArray.Get();
        for (let i = 0; i < array.length; i++) {
            console.log(array[i] + '\n')
        }
    }
}

module.exports = Print;