var arr = [1, 2, 3, 4, 5];

function addTen( arr ) {
  var newArr = [];
  
  for( var i = 0; i < arr.length; i++ ) {
    var sum = arr[i] + 10;
    arr[i] = newArr.push(sum);
    // code here
  }
  
  return newArr;
}
var newArr = addTen(arr);
console.log(newArr);

