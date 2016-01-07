/*
You should finish myObj by giving it a name property. Make sure that myObj does not have a nickname property so that the last line will print false.
*/

var myObj = {
    // finish myObj
  name: "object!",

};

console.log( myObj.hasOwnProperty('name') ); // should print true
console.log( myObj.hasOwnProperty('nickname') ); // should print false


