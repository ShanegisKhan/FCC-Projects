function permAlone(str) {
  var regex = /(.)\1+/g;
  var temp = [];
  var permutations = [];
  var arr = str.split('');

  if(str.match(regex) !== null && str.match(regex)[0] === str) return 0;

  function swap(index1, index2) {
    temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }

  function heaps(int) {
    if(int === 1) {
      permutations.push(arr.join(''));
    } else {
      for(var i = 0; i != int; i++) {
        heaps(int - 1);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }
  }
  heaps(arr.length);

  var filtered = permutations.filter(function(string) {
    return !strin.match(regex);
  });

  return filtered.length;
}

permAlone("abcdefa");
