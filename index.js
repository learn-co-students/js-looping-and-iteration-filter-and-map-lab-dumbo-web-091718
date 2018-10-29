// Code your solution here:
function driversWithRevenueOver(array, revenue){
  return array.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(array, revenue){
  let moneyDrivers =  array.filter(driver => driver.revenue > revenue)
  return moneyDrivers.map(driver => driver.name)
}

function exactMatch(drivers, obj) {
  let objKey = Object.getOwnPropertyNames(obj)
  let keyName = objKey[0].toString()
  return drivers.filter (driver => driver[keyName] === obj[keyName])
}

function exactMatchToList(drivers, obj) {
  const driverArr = exactMatch(drivers, obj)
  if (driverArr.length > 0) {
    let objKey = Object.getOwnPropertyNames(driverArr[0])
    let keyName = objKey[0].toString()
    return driverArr.map(driver => driver[keyName])
  } else {
    return driverArr
  }
}
