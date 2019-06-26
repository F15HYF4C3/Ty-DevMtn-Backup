var greeting = "Hello,";
var firstName = "Jeremy.";
function sayHello(greeting, firstname) {
  return (greeting + firstName)
}
sayHello(greeting, firstName);

function makeExercise(exerciseName, duration){
    var excerciseName = {
    name: "exerciseName",
    time: "duration"
    }
     return ("exerciseName" + ' ' + exerciseName + ' ' + "duration" + ' ' + duration)
   }
console.log(makeExercise("running", 20));
