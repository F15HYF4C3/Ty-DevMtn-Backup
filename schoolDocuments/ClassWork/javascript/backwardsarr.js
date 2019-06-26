const arr = [1, 2, 3, 4, 5];
function backWards( arr ) {
  var newArray = [];
  
  for( var i = arr.length - 1; i >= 0; i-- ) {
    arr[i] = newArray.push(arr[i]);// code here
  }
  
  return newArray;
}
newArray = backWards(arr);
console.log(newArray);