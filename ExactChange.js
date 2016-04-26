function checkCashRegister(price, cash, cid) {
  var change;
  var owed = Math.round((cash - price)*100)/100;
  var totalCash = 0;
  var string = '';
  var stdCurr = [0.01, 0.05, 0.10, 0.25, 1.0, 5.0, 10.0, 20.0, 100.0];
  var returnedChange = [];

  for(var i = 0; i < cid.length; i++) {
    totalCash += cid[i][1];
  }
  if(owed > totalCash) {
    return string = "Insufficient Funds";
  } else if(owed === totalCash) {
    return string = "Closed";
  }
  for(var j = cid.length - 1; j >= 0; j--) {
    var currType = cid[j][0];
    var currValue = stdCurr[j];
    var cashInDrawer = cid[j][1];
    owed = Math.round(owed * 100) / 100;

    if(owed >= currValue) {
      var cashBack = Math.round((cashInDrawer / currValue) * 100) / 100;
      change = Math.round(Math.floor(owed / currValue)*100)/100;
      if(change > cashBack) {
        change = Math.round(cashBack * 100)/100;
      }
      cashInDrawer -= Math.round((change * currValue)*100)/100;
      owed -= Math.round((change * currValue)*100)/100;
      returnedChange.push([currType, Math.round((change * currValue)*100)/100]);
      if((change * currValue) < owed) {
        return string = "Insufficient Funds";
      }
    }
  }
  //var returnedChange = [];
  //returnedChange.push(change);

  return returnedChange;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
