//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
//the end of string1 must be equal to string two
//
//Examples:

//solution('abc', 'bc') // returns true
//solution('abc', 'd') // returns false

//MY ATTEMPT
 /* const matching = (string1, string2) =>{
    if(string2 === 1 + string1){
        return true;
    }else if(string2 !== 1+string1){
        return false;
    }
    }
    const solved = matching('abc', 'bc');
    console.log(solved);
*/
    //Instructor Josh's Solution
    function solution(str, ending){

        if(str.length < ending.length){
            return false;
        }
        let answer = true;
        let j = ending.length -1
        for(let i = str.length-1; i >= 0; i-- ){
            if(j > -1 && str[i] === ending[j]){
                j--;
                if(j === -1){
                    break;
                }
            }else{
                answer = false;
                break;
            }       
        }
        return answer;
    }
    
    function solution(str, ending){
        return new RegExp(ending+"$", "i").test(str);
      }
    
    function solution(str, ending){
        return str.endsWith(ending);
      }
    
    console.log(solution('ails', 'ils'))