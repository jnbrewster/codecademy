/*
Use the add method to sum up the cost of the following four items.

Eggs 0.98
Milk 1.23
Magazine 4.99
Chocolate 0.45
If we only call the method once, it will just add the first item. So to add up the cost of four items, how many times will we have to call the method?
*/
var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    }
};


//call the add method for our items
cashRegister.add(0.98);
cashRegister.add(1.23);
cashRegister.add(4.99);
cashRegister.add(0.45);

//Show the total bill
console.log('Your bill is '+cashRegister.total);


