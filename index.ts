
import inquirer from "inquirer";
let random = Math.floor(Math.random()*10+1)
let ran = await inquirer.prompt([
  {
    message: "Enter your random number between 1-6:",
    name: "guess",
    type: "number",
  },
]);
if (ran.guess === random) {
  console.log("congratulations you entered right number");
  console.log("Author: Farhad Ali Laghari.")
} else {
  console.log("You entered wrong number");
}
