// Code your solution here:
function driversWithRevenueOver(array, rev) {
  const overRevenueDrivers = array.filter(function(driver){
    if (driver.revenue > rev){
      return driver.name
    }
  })

  return overRevenueDrivers;
}

function driverNamesWithRevenueOver(array, rev) {
  const overRevenueObjects = array.filter(function (driver){
    return driver.revenue > rev
  });
  const overRevenueNames = overRevenueObjects.map(function(driver) {
    return driver.name
  })
  return overRevenueNames
}

function exactMatch(array, attribute) {
  const exactMatch = array.filter(function (driver){
    return driver[`${Object.keys(attribute)}`] === Object.values(attribute)[0]
  });
  return exactMatch
}

function exactMatchToList(array, attribute) {
  const exactMatchObject = array.filter(function (driver){
    return driver[`${Object.keys(attribute)}`] === Object.values(attribute)[0]
  });
  const exactMatchNames = exactMatchObject.map(function(driver) {
    return driver.name
  });
  return exactMatchNames
}
