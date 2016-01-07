/*
Remove the console.log statement.

Write an if statement that checks to see if suitcase has the shorts property.

If your if statement evaluates to true, print the value of the shorts property.

If your if statement evaluates to false, set the shorts property to any value you wish using dot notation. Then print the value of the shorts property.
*/
var suitcase = {
    shirt: "Hawaiian"
};

if (suitcase.hasOwnProperty("shorts") === true) {
  console.log(suitcase.shorts);
}
else {
    suitcase.shorts = "pink";
    //or
    //suitase["shorts"] = "pink";
}
