/*
Create a brand new Penguin class constructor starting in line 11. A penguin is an animal so it should also have the name and numLegs properties as well as a sayName method that prints the same thing as Animal's sayName method.

We're not done with animals yet, so we have still included the Animal constructor and its sayName method. The last two lines test your Penguin code.
*/
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};


// create a Penguin constructor here
function Penguin(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}

// create a sayName method for Penguins here
Penguin.prototype.sayName = function () {
    console.log("Hi my name is " + this.name)
}

// our test code
var theCaptain = new Penguin("Captain Cook", 2);
theCaptain.sayName();
