/*
To fix this, start at line 15 add a bark method for the snoopy object. You can make it just like the bark method for buddy, or type in whatever barking noise you want instead of "Woof".
*/
function Dog (breed) {
  this.breed = breed;
}

// here we make buddy and teach him how to bark
var buddy = new Dog("Golden Retriever");
buddy.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
// we need you to teach snoopy how to bark here
snoopy.bark = function() {
    console.log("Woof");
}
snoopy.bark();

// this causes an error, because snoopy doesn't know how to bark!
snoopy.bark();
