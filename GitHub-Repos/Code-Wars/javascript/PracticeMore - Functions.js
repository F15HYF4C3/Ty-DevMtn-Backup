var currentSpeed = "TBD";
var brakes = "TBD";
var crash = false;

function setCrash(){
  if (currentSpeed === 'fast' && brakes === false){
    console.log(crash = true)}
}

console.log(setCrash('fast', false))


const nums = require('nums');
var countToThree = [];
for(var i = 1; i<= 3; i++){
    countToThree.push(i);
}
countToThree

var num1 = [2, 31, 47, 16];
var evenNums = [];
for (var i = 0; i <= num1.length; i++) {
    if(num1[i] % 2 === 0){
        evenNums.push(num1[i]);
    }
}