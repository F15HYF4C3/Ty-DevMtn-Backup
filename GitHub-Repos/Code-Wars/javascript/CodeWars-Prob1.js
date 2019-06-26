function firstReverseTry(arr) {
if(arr.length > 1) {
// find the values
 // find the first value ([])
  const first = arr[0];
// find the last value ([])
 // If array values are unknown, find the last index (arr.length)
  const lastIndex = arr.length - 1;
  const last = arr[lastIndex];
// swap the values
 // set the first value to the last
arr[0] = last;
  // set the last value to the first 
arr[lastIndex] = first;
// if array is empty, check for edges
  // return the arr
  return arr;  
  }
}