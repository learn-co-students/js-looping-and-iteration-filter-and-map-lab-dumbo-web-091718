// Code your solution here:
function driversWithRevenueOver(array, num) {
  return array.filter(function (obj) { return obj.revenue > num });
}

function driverNamesWithRevenueOver(array, num) {
  return driversWithRevenueOver(array, num).map(x => x.name);
}

function exactMatch(array, att) {
  return array.filter(function (obj) {
    for (const key in att) {
      return obj[key] === att[key];
    };
   })
}

function exactMatchToList(array, att) {
  return exactMatch(array, att).map(x => x.name);
}
