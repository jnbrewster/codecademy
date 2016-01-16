/*
Here we have included similar code from last time, but here we have added a method getBalance. Modify getBalance so that it returns bankBalance.

Then on line 17, create a new variable named myBalance and set its value to John's bank balance. You can do this by calling your newly-defined getBalance method for john. Then print myBalance.

Line 14 should still print undefined!
*/
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;

   this.getBalance = function() {
      // your code should return the bankBalance
      return bankBalance();
   };
}

var john = new Person('John','Smith',30);
console.log(john.bankBalance);

// create a new variable myBalance that calls getBalance()
var myBalance = new Person(john.getBalance);
