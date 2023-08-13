import globalArray from "./GlobalArray";
const create = require('./create')
import Project from "./Project";
import Dom from "./Dom";
export function next7Days() {
    let sevenArr = []
    // let nextArr = []
    let month;
    let value;
    switch (new Date().getMonth()) {
        case 0:
            month = 'January'
            value = 0
            break;
        case 1:
            month = 'February'
            value = 1
            break;
        case 2:
            month = 'March'
            value = 2
            break;
        case 3:
            month = 'April'
            value = 3
            break;
        case 4:
            month = 'May'
            value = 4
            break;
        case 5:
            month = 'June'
            value = 5
            break;
        case 6:
            month = 'July'
            value = 6
            break;
        case 7:
            month = 'August'
            value = 7
            break;
        case 8:
            month = 'September'
            value = 8
            break;
        case 9:
            month = 'October'
            value = 9
            break;
        case 10:
            month = 'November'
            value = 10
            break;
        case 11:
            month = 'December'
            value = 11
            break;
    }

    //Get month from string
    //compare month with value and today's month
    //print list if same

    for (let i = 0; i < globalArray.get().length; i++) {
        for (let j = 0; j < globalArray.get()[i]['Due Date'].length; j++) {
            const split = globalArray.get()[i]['Due Date'][j].split(' ')
            const getMonth = split[1]
            if (month === getMonth) {
                const getDay = split[2].replace(',', '')
                const today = new Date().getDate()
                if (getDay - today <= 7) {
                    console.log('answer')
                    console.log(globalArray.get()[i].Title)
                    console.log(globalArray.get()[i].Description[j])
                    console.log(globalArray.get()[i]['Due Date'][j])
                    console.log(globalArray.get()[i].Priority)
                    let obj = {
                        'Title': globalArray.get()[i].Title,
                        'Description': globalArray.get()[i].Description[j],
                        'Due Date': globalArray.get()[i]['Due Date'][j],
                        'Priority': globalArray.get()[i].Priority[j],
                        'Finished': globalArray.get()[i].Finished[j]
                    }
                    sevenArr.push(obj)
                    console.log('seven', sevenArr)
                    // create.create()
                    // const a = new Project
                    // a.loadWindow()
                    // const b = new Dom
                    // b.domStuff()
                } else {
                    console.log('no week')
                }

            } else {
                console.log('no month')
            }
            // nextArr = { date: sevenArr[i][j] }
            // let arr = globalArray.get()[i]['Due Date']
            // const today = new Date().getDate()
            // console.log (arr, today, sevenArr)
            // if (month === arr[1]) {
            //     const number = arr[2].replace(',', '')
            //     if (today - number <= 7) {
            //         nextArr.push(obj.date)
            //         console.log(nextArr)
            //     }


            // }
            // else { 
            //     console.log('false')
            // }

        }
    }
}
