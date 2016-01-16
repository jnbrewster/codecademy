/*
Create an object john using the Person constructor. He can have any name and age you wish.

Next, try to print his bankBalance. What happens?
*/
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
}

// create your Person
var john = new Person();

// try to print his bankBalance
console.log(john.bankBalance);
