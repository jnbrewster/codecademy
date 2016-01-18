/*
Instructions
Write the add method which has a single parameter, itemCost. It will add the itemCost to the total.
We have partially written the scan method for you and started a switch statement. Add the following 2 items to the switch statement:
"magazine", 4.99
"chocolate", 0.45
Finally, use the scan method to buy "eggs" twice and a "magazine" three times.
*/
var cashRegister = {
  total: 0,
  //insert the add method here
  add: function(itemCost) {
    this.total = (this.total + itemCost);
  },

  scan: function (item) {
    switch (item) {
      case "eggs":
      this.add(0.98);
      break;

      case "milk":
      this.add(1.23);
      break;

      //Add other 2 items here
      case "magazine":
      this.add(4.99);
      break;

      case "chocolate":
      this.add(0.45);
      break;


      }
    return true;
  }
};

//Scan 2 eggs and 3 magazines
cashRegister.scan("eggs");
cashRegister.scan("eggs");
cashRegister.scan("magazine");
cashRegister.scan("magazine");
cashRegister.scan("magazine");

//Show the total bill
console.log('Your bill is '+cashRegister.total);


