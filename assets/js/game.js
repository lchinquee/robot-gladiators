// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

// this prompts the user to enter information, does not need a separate call to execute
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// logs multiple values at once
console.log(playerName, playerAttack, playerHealth);

// enemies to battle
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {
        //Alert players that they are starting the round
        // window.alert("Welcome to Robot Gladiators!");

        // ask the player if they want to fight
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm the player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip the fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            // award player money for winning
            playerMoney = playerMoney + 20;
            // leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
         // remove player's health by subtracting the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
         playerHealth = playerHealth - enemyAttack;

         // Log a resulting message to the console so we know that it worked.
         console.log(
             enemyName + " attached " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
         );
        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            // leave while() loop if player is dead
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        } 
        /*else {
            window.alert("You need to choose a valid option. Try again!");
        }*/
    }
}

// next enemy in line up
for(var i = 0; i < enemyNames.length; i++) {
    // use a debugger when want to debug code in Chrome debug tools
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    // this calls the 'fight' function so the code actually executes it
    fight(pickedEnemyName);
}
/* this creates/defines a function named "fight"
function fight() {
    window.alert("The fight has begun!");
}*/

/* if no (false), ask question again by running fight() again        
else {
    fight();
}*/
