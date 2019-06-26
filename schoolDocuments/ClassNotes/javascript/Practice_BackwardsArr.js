var arrForwards = [1, 2, 3, 4];

function backWards(arrE) {
  var newArray = [];
  
  for( var i = 0; i <= arrE.length; i-- ) {
    arrE[i-1] = newArray.unshift(arrE[i]);// code here
  }
  
  return newArray;
}
var newArray = backWards(arrForwards);
console.log(newArray);

var arr = [0, 1, 2, 3, 4, 5];

function backWards(arrForwards) {
  var newArray = [];
  
  for( var i = arr.length; i >= 0; i-- ) {
    arr[i - 1] = newArray.unshift(arr[i]);// code here
  }
  
  return newArray;
}
var newArray = backWards(arr);
console.log(newArray);

 const arrF = [1, 2, 3];
function findInArray( arrF, value ) {
     for (var i = 0; i <= arrF.length; i++){
     if(arrF[i] === value){
      return true;}
     }
     return false;
    }

const found = findInArray(arrF, 6);
console.log(found);