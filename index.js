// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  //returns empty arr if not met
  const checkDrivers = drivers.filter(function (driver) { return driver.revenue > revenue });
  return checkDrivers
}
//return if salary satisfies
function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name);
}
function exactMatch(driversObject, target) {
  return driversObject.filter((driver) => {
    return driver.name == target.name || driver.revenue == target.revenue
  });
}

function exactMatchToList(driversObject, target) {
  return exactMatch(driversObject, target).map(driver => driver.name);
}
