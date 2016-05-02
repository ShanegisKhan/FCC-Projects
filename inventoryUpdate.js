//jshint esversion: 6
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  var sortedInv = [];
  var oldInv = [];
  var newInv = [];
  var invCount = [];
  var newInvCount = [];
  var combinedInv = [];


  for(var i = 0; i < arr1.length; i++) {
    sortedInv.push(arr1[i][1]);
    sortedInv.sort();
    oldInv.push(arr1[i][1]);
    oldInv.sort();
    newInv.push(arr2[i][1]);
    newInv.sort();
    invCount.push(arr1[i][0]);
    newInvCount.push(arr2[i][0]);
  }

  for(var j = 0; j  < newInv.length; j++) {
    if(sortedInv.indexOf(newInv[j]) === -1) {
      sortedInv.push(newInv[j]);

    }
    sortedInv.sort();
  }

  for(var k = 0; k < sortedInv.length; k++) {
    combinedInv.push([0, sortedInv[k]]);

    if(combinedInv[k].indexOf(arr1[k][1]) !== -1) {
      combinedInv[k][0] += arr1[k][0];
    } else if(combinedInv.indexOf(arr2[k][1]) !== -1) {
      combinedInv[k][0] += arr2[k][0];
    }
  }



  return combinedInv;
  //sortedInv[0].push(67);
   //sortedInv[0][1] += arr1[0][0];
  //return sortedInv;
}
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
