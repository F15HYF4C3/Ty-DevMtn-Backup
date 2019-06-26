const arrMix = [1, '1', 2, '2', 3, '3'];
function addTens(arrMix) {
    var newArr1 = [];
    for (var i = 0; i <= arrMix.length; i++) {
       var sum1 = arrMix[i] + 10;
        if(sum1 < 0) {
           arrMix[i] = newArr1.push(sum1);
              return newArr1;
        }// code here
    }
    return newArr1;
}

newArr1 = addTens(arrMix);
console.log(newArr1);
