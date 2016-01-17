/*
Let's first see what type Object.prototype is. Do this in line 2 and save it into prototypeType.

If all goes well, you should realize that Object.prototype itself is an object! And since all objects have the hasOwnProperty method, it's pretty easy to check if hasOwnProperty comes from Object.prototype. Do this in line 6 and the result may be surprising.
*/

// what is this "Object.prototype" anyway...?
var prototypeType = typeof Object.prototype;
console.log(prototypeType);

// now let's examine it!
var hasOwn = Object.prototype.hasOwnProperty("hasOwnProperty");
console.log(hasOwn);


