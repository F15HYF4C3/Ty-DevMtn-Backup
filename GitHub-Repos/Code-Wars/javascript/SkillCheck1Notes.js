var array = ['tyra', 'is', 'cool', 'and', 'loves', 'code']
// var modifiedArra = []
var number = [1,2,3,4,5,6,7]
//a = is each thing your iterating through
// var newArray = array.forEach(a => {
//   return modifiedArra.push(a + 'es')
//   })
var newArray = array.map(
  a => {return a + 'es'}
  )

// console.log(newArray)
// console.log(modifiedArra)

function isMyNumberInNumberArray(num){
  var isItinThere = false
  number.forEach(e => {
    if(e == num){
      isItinThere = true
    }
  })
  return isItinThere
}
//HIGHER ORDER FUNCTIONS
//always loop through the entire array

isMyNumberInNumberArray(5)