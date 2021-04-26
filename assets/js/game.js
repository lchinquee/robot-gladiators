// this prompts the user to enter information, does not need a separate call to execute
var playerName = window.prompt("What is your robot's name?");
console.log(playerName);

console.log("This logs a string, good for leaving yourself a message");

// this will do math and log 20
console.log(10 + 10);

console.log("Our robot's name is " + playerName);


// this creates/defines a function named "fight"
function fight() {
    window.alert("The fight has begun!");
}

// this calls the 'fight' function so the code actually executes it
//fight();
