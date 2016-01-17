/*
Examine the languages object. Three properties are strings, whereas one is a number.

Use a for-in loop to print out the three ways to say hello. In the loop, you should check to see if the property value is a string so you don't accidentally print a number.
*/
var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages
for (x in languages) {
  if (typeof languages[x] === "string") {
    console.log(languages[x]);
  }
}


