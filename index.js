// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
    return driversWithRevenueOver(drivers, revenue).map(driver => driver.name)
}

function exactMatch(drivers, attribute) {
    const attributeKey = Object.keys(attribute)[0]
    return drivers.filter(driver => driver[attributeKey] === attribute[attributeKey])
}

function exactMatchToList(drivers, attribute) {
    return exactMatch(drivers, attribute).map(driver => driver.name)
}