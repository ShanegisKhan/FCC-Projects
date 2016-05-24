
function pairwise(arr, arg) {
  var total = 0;
  var newArr = [];

  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr.length; j++) {
      if(arr[i] + arr[j] === arg) {
        if(newArr.indexOf(i) === -1 && newArr.indexOf(j) === -1 && i !== j) {
            newArr.push(i);
            newArr.push(j);
        }
      }
    }
  }
  if(newArr[0] == null) {
    return 0;
  }
  total = newArr.reduce(function(a, b) {
    return a+b;
  });
  return total;
}

pairwise([], 100);
