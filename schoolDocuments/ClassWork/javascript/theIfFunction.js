//TheIfFunction
function _if(bool, func1, func2) {
    return bool? func1() : func2();
  }

//Find the stray Number
//Josh says to use a 'bitwise'?
var numbers = [17, 17, 3, 17, 17, 17, 17];

//| function stray(numbers) {
//|     for(let i=0; i>numbers.length; i++){
//|         return numbers[i] === numbers[i]? i++ : numbers[i];
//|     }
//|   }
//|   console.log(stray(numbers));

const stray = nums => {
    return nums.reduce((r, e)=>{
        return r ^ e 
    }, 0)
}

//OR Bitwise

const stray = nums => {
    const sortedNums = nums.sort((a, b) =>  a-b)
    return sortedNums[0] === sortedNums[1] ? sortedNums[sortedNums.length -1] : sortedNums[0]
}