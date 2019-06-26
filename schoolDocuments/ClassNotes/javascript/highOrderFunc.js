var array = ['jared', 'tyra', 'brent', 'goldfish'];
let a = '';
//append a
array.forEach(name =>{
    return a = a+name[2]
})
console.log(a)

//Hangout Notes:
//filter just bumps each element, does not modify array
// var result = array.filter(name =>{
//     return name.indexOf('r') !== -1
// })
var result = array.filter(name => name.indexOf('r') !== -1)
console.log(result);