//2.2 practice problem reduce
var numbers = 'TBD';
var productOfArray = ()=> {
    numbers.reduce((reducer, element)=>{
        return reducer*=element;
        return reducer
    }, 1)
}

//Context problem 6
var user = {
    name: 'chris',
    age: 36
  };
  
  
  var getName = (function() {
    return 'chris';
  }).bind(user);
var name = getName();
//This practice problem is poorly worded

//Class is a template for how we want an object to look (pretottype)
class person {
    constructor(firstName, lastName, occupation, age, height, weight, yearsInOccupation){
        this.firstName = firstName;
        this.lastName = lastName;
        this.occupation = occupation;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.yearsInOccupation = yearsInOccupation;
        this.default = 'Default'
    }

    sayName(){
        return `${this.firstName} + ${this.lastName}`
    }
}



const josh = new person('Josh', 'Smith', 'Software Developer', 25, `5'11`, 180, 3)

console.log(josh.sayName())