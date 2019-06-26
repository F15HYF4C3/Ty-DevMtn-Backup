// The existing user looks like this:
var someuser = {
    name: 'Sally Rally',
    pwHash: 'U+Ldlngx2BYQk',
    username: 'SallyRally801'
   };
  
  function updateUser(user, value) {
    someuser[user] = value;
    return(someuser);
  }
  
  updateUser('name', 'Ryan');
  updateUser('pwHash', '43df90w_h');
  updateUser('username', 'ryanleeeallred');
  
  console.log(someuser);

var person = {
    age:12
};
function isOldEnough(age){
  if(age >= 21){
   console.log(true);
  }else{
    if(age < 21)
    return(false);
  }
}

var clubGoer = isOldEnough(12);
console.log(clubGoer);

var someuser = {
    name: 'Sally Rally',
    pwHash: 'U+Ldlngx2BYQk',
    username: 'SallyRally801'
   };
  
  function updateUser(user, value) {
    return{
        name: value,
        pwHash: value,
        username: value
    };
  }
  
someuser = updateUser('name', 'Ryan');
someuser = updateUser('pwHash', '43df90w_h');
someuser = updateUser('username', 'ryanleeeallred');

  console.log(someuser);