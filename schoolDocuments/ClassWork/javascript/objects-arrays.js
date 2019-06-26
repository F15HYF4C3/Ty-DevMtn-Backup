var obj = {
    num: 1,
    str: 'Hello'
}
console.log(obj.num);

var arr = [1, 2, 3, 4];
console.log(arr[2]);

var arr1 = [1, 'string', obj, arr];
console.log(arr1);

var classWork = [
    {
        name: 'Tyra',
        age: '23'
    }, {
        name: 'Jordan',
        age: '22'
    }, {
        name: 'Ali',
        age: '23'
    }
];
var arr = classWork[1];
console.log(arr);
console.log(arr.name);
console.log(arr.age);

var num1 = 5;
var num2 = 79;
function multiply(num1, num2){
    return num1*num2;
}
var answer = multiply(5, 79);
console.log(answer);



var theName = "Jeremy";
var theBoss;

function assignName(name){
  return theName;
}

var theBoss = assignName(theName);
console.log(theBoss);

var user = {
    name: "Billy",
    age: 18,
    email: "billy123@billy.com"
  }
  
  function getName(user){
    return user.name;
  }
  