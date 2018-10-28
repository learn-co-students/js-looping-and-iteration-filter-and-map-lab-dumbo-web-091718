// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name);
}

function exactMatch(drivers, match) {
  return drivers.filter(driver => {
    return (driver.name == match.name) || (driver.revenue == match.revenue)
  });
}

function exactMatchToList(drivers, match) {
  return exactMatch(drivers, match).map(driver => driver.name);
}

