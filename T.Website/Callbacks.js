var array = [2, 4, 6, 8];
array.forEach(function(num, i, arr){
    return arr[i]++;
});
array;

function add(num1, num2){
return num1 + num2;
  }
  var sum = add(1, 3);
  console.log(sum);
  
  function multiply(num1, num2){
    return num1 * num2;
  }
  var product = multiply(2, 5);
  console.log(product);
  
  function math(num1, num2, callback){
    return callback(num1, num2);
  }
  
  var answer = math(2, 3, multiply);
  console.log(answer);

  function messageBasedOnAge(age) {
    return age < 18 ? 'Not quite old enough, sorry.'
    : age === 18 ?'Congrats on being an adult!'
    : age > 18 ? 'Sombody is really getting up there, huh?'
    : 'You do not exist';
  }
  var ageMessage = messageBasedOnAge(10);
  ageMessage;

  arrMix = [1, 'one', 2, 'two', 3, 'three'];
function addTens(array) {
    var newArr1 = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            return newArr1.push(array[i + 10]);
        }else{
            array.splice(array[i]);
        }
        // code here
    }
}
newArr1 = addTens(arrMix);
console.log(newArr1);

function deleteUser( array, property, value ) {
    for( var i = 0; i < array.length; i++ ) {
      if( array[i][property] === value ) {
        // code here
      } 
    }
    
    return array;
  }
  