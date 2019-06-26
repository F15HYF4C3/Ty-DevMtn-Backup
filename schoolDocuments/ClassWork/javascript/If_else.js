var hunger;
var fatigue;

function eat(){
  hunger = "gone";
  return "yum yum";
}

function sleep(){
  fatigue = "gone";
  return "zzz zzz zzz";
}

// Your Code Here
var hungry;
var tired;
function decisionMaker(hungry, tired){
  if((hungry === true) && (tired === false)){
    console.log(eat());
  }else{
      if ((hungry === false) && (tired === true)){
    console.log(sleep());
  }else{
    return ("undecided");
    }
  }
}
var decision = decisionMaker(); 
decisionMaker(false, true);
  console.log(decision)
