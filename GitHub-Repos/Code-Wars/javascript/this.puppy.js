class Puppy {

    constructor(happiness, energy, behavior) {
      this.happiness = happiness;
      this.energy = energy;
      this.behavior = behavior;
    }
  
   getsTreat(){
   this.happiness = this.happiness + 20;
   }
   takesNap(){
   this.energy = this.energy - 45;
   this.behavior = this.behavior + 15;
   }
  }
  
  var Charles = new Puppy(75, 25, 30);
  Charles.getsTreat();
  Charles.takesNap();
  console.log(Charles);
  