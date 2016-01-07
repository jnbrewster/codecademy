/*
Write another for-in loop, but this time print the value of each property in nyc.
*/
var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

// write a for-in loop to print the value of nyc's properties
for (property in nyc) {
    console.log(nyc[property]);
}

