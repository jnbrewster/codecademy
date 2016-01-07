/*
Use a for-in loop to print out all the properties of nyc.
*/
var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

for (var property in nyc) {
    console.log(property);
}
