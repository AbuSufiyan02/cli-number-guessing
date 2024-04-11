#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5 + 1);
console.log("\n\tWelcome to cli based number guessing game\n");
const answer = await inquirer.prompt([
    {
        name: "GuessedNumber",
        type: "number",
        message: "\n\tPlease Guess a number between 1 to 5: "
    }
]);
if (answer.GuessedNumber === randomNumber) {
    console.log("\n\tMashAlllah! You Guessed right number");
}
else {
    console.log("\n\tOops! You Guessed Wrong number\n\tPlease try again ;)");
}
