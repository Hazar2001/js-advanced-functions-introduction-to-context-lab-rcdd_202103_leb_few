// Your code here
function createEmployeeRecord(array){
    let newArray
    return newArray = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}
function createEmployeeRecords(ar){
    return ar.map(createEmployeeRecord)
}
/////////////////////////////////////////////////

function createDSObj(object, dateStamp) {
    return {type: object, date: dateStamp.slice(0,10), hour: parseInt(dateStamp.slice(-4))}
}

/////////////////////////////////////////////////
