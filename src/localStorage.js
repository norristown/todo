import globalArray from "./GlobalArray";
export function loadLocalStorage() {
    let globalArray_serialized = JSON.stringify(globalArray.get())
    localStorage.setItem('localStorageArray', globalArray_serialized)
    
    return JSON.parse(localStorage.getItem('localStorageArray')) || []
}