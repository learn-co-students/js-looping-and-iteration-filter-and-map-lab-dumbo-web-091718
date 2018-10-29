// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter (function(driver) {
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map (function(driver) {
    return driver.name
  })
}

function exactMatch(drivers, object) {
  return drivers.filter (function(driver) {
    return driver.name === object.name || driver.revenue === object.revenue
  })
}

function exactMatchToList(drivers, object) {
  return exactMatch(drivers, object).map (function(driver) {
    return driver.name
  })
}
