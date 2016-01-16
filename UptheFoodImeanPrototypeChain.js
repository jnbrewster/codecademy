/*
Let's see how going up the prototype chain works! We've defined some classes and inheritance patterns: Emperor inherits from Penguin which inherits from Animal. We've also created an instance of the Emperor class.

Without modifying anything other than lines 22-24, complete the console.log statements to print the appropriate responses.

Remember how the prototype chain works: if a property is not defined for a class, this class's prototype chain will be traversed upwards until one is found (or not) in a parent (higher) class.
*/
// original classes
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.isAlive = true;
}
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}
function Emperor(name) {
    this.name = name;
    this.saying = "Waddle waddle";
}

// set up the prototype chain
Penguin.prototype = new Animal();
Emperor.prototype = new Penguin();

var myEmperor = new Emperor("Jules");

console.log(myEmperor.saying); // should print "Waddle waddle"
console.log(myEmperor.numLegs); // should print 2
console.log(myEmperor.isAlive); // should print true
