/*
Take advantage of the ability to use variables with bracket notation.

In line 7, set aProperty to a string of the first property in james (ie. the job property).

Then print james's job using bracket notation and aProperty.
*/
var james = {
    job: "programmer",
    married: false
};

// set to the first property name of "james"
var aProperty = "job";

// print the value of the first property of "james"
// using the variable "aProperty"

console.log(james[aProperty]);
