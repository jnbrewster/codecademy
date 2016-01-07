/*
Take a look at the partially-defined james object. Complete the speak method such that the last two lines in the editor will cause "Hello, I am feeling great" and "Hello, I am feeling just okay" to be printed to the console.
*/
var james = {
    job: "programmer",
    married: false,
    speak: function(speak) {
      console.log("Hello, I am feeling " + speak);
    }
};

james.speak("great");
james.speak("just okay");
