// Code your solution in this file!
const returnFirstTwoDrivers = drivers => {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = drivers => {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = int => {
    return function(){
        return int * int
    }
}

const fareDoubler = fare => fare * 2

const fareTripler = fare => fare * 3

function selectDifferentDrivers(arrayOfDrivers, fn) {
    return fn(arrayOfDrivers)
}