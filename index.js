// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  let richDriver = drivers.filter(function (driver) {
    return driver.revenue > revenue
  })
  return richDriver
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) {
    return driver.name
  })
}

function exactMatch(drivers, javObj) {
  let filterDrivers  = drivers.filter(function (driver) {
    return driver.name === javObj.name || driver.revenue === javObj.revenue
    // console.log(javObj)
    // console.log(driver);
  })
  return filterDrivers
}


function exactMatchToList(drivers, javObj) {
  return exactMatch(drivers, javObj).map(function (driver) {
    return driver.name
  })
}
