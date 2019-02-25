// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(d => {
    return d.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue){
  let filtArr = driversWithRevenueOver(drivers, revenue)

  return filtArr.map(d => {
    return d.name
  })
}

function exactMatch(drivers, val){
  let check = Object.keys(val)[0]
  return drivers.filter(d => {
    return d[check] === val[check]
  })
}

function exactMatchToList(drivers, val){
  let filtArr = exactMatch(drivers, val)
  return filtArr.map(d => {
    return d.name
  })
}