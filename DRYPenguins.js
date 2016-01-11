/*
Create a new Penguin class. The Penguin constructor can be more unique than the generic Animal one because all penguins have 2 legs. Your constructor should only take a name parameter, and within the constructor itself, set this.numLegs to 2.

Set the Penguin class's prototype to a new instance of Animal by adding this line after you make the constructor:

Penguin.prototype = new Animal();

This means that Penguin inherits properties and methods from Animal.
*/
// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// set its prototype to be a new instance of Animal
Penguin.prototype = new Animal();
