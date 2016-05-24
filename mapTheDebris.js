
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var avgAlt = arr[1];
  var a = 2*Math.PI;
  var newArr = [];

  var getOrbPeriod = function(obj) {
    var semitMajorAxis = Math.pow(earthRadius + avgAlt, 3);
    var b = Math.sqrt(semiMajorAxis / GM);
    var orbitalPeriod = Math.round(a * b);
    obj.orbitalPeriod = orbitalPeriod;
    delete obj.avgAlt;
    return obj;
  };

for (var elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }
  return newArr;
}
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
