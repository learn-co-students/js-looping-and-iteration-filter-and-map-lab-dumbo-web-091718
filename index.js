// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
    return drivers.filter(function(driver){
       return driver.revenue > revenue
    })
}

function driverNamesWithRevenueOver(drivers, revenue){
    arr = driversWithRevenueOver(drivers, revenue)
    return arr.map(function(driver){
        return driver.name
    })
}

function exactMatch(drivers, keyValue){
    return drivers.filter(function(driver){
        return Object.values(driver).includes(Object.values(keyValue)[0])
    })  
}

function exactMatchToList(drivers, keyValue){
    array = exactMatch(drivers, keyValue)
    return array.map(function(driver){
        return driver.name 
    })
}