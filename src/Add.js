const globalArray = require('./GlobalArray')

class Add {
    AddToGlobalArray() {
        globalArray.Add('1');
        globalArray.Add('2');
        globalArray.Add('3');
        globalArray.Add('4');
        globalArray.Add('5')
    }
}

module.exports = Add;