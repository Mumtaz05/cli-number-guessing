#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number - Done
// 2) User input for guessing number - Done
// 3) compare user input with computerr generated number and show ther result - Donde
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to number guessing game");
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed right number.");
}
else {
    console.log("You guessed a wrong number.");
}
