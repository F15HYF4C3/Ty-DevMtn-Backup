function makeExercise(exerciseName, duration) {
  var excerciseName = {
    name: "exerciseName",
    time: "duration"
  };
  return ("exerciseName" + ' ' + exerciseName + ' ' + "duration" + ' ' + duration);
}
console.log(makeExercise("running", 20));
