/*
Add the sayHello method to the Dog class by extending its prototype.

sayHello should print to the console: "Hello this is a [breed] dog", where [breed] is the dog's breed.
*/
function Dog (breed) {
    this.breed = breed;
};

// add the sayHello method to the Dog class
// so all dogs now can say hello
Dog.prototype.sayHello = function() {
    console.log("Hello this is a " + breed + " dog");
};

var yourDog = new Dog("golden retriever");
yourDog.sayHello();

var myDog = new Dog("dachshund");
myDog.sayHello();




