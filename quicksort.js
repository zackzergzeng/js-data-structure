function quickSort(list, start, end){
  var middle = list[start];
  if (isNaN(start) && isNaN(end)) {
    quickSort(list, 0, list.length-1);
  } else {
    if (end <= start) {
      return list;
    }
    var i = start + 1, j = end;
    while (true) {
      while (list[i] < middle) {
        i++;
        if (i === end) {
          break;
        }
      };
      while (list[j] > middle) {
        j--;
        if (j === start) {
          break;
        }
      }
      if (i < j) {
        var x = list[i];
        list[i] = list[j];
        list[j] = x;
      } else {
        break;
      }
    }
    list[start] = list[j];
    list[j] = middle;
    quickSort(list, start, j-1);
    quickSort(list, j+1, end);
  }
  return list;
}

var a = [4, 3, 5, 7, 1];
console.log(quickSort(a));