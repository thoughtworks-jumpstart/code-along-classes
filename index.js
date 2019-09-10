function Car(name) {
  this.name = name;
}
Car.prototype.getName = function() {
  return this.name;
};
Car.sound = function(sound) {
  console.log("car produce", sound);
};

let bmw = new Car("bmw");
console.log(bmw.getName());
Car.sound("vroom");

class Trunk {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  static makeSound(sound) {
    console.log("Trunk make", sound);
  }
}

const volvo = new Trunk("volvo");
console.log(volvo.getName());
Trunk.makeSound("GGRRRRRRR");
