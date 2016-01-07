/*
Make your own class, Circle, by building a constructor for it. The constructor for Circle should have one property, radius, and take one argument for the initial radius.
*/
function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 35);

// make your own class here
function Circle(radius) {
    this.radius = radius;
}
