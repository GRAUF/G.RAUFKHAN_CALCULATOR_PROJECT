#!  /usr/bin/env node

import inquirer from "inquirer";
import { connected } from "process";
const answer = await inquirer.prompt([
  {
    type: "number",
    name: "firstNumber",
    message: "Enter first number",
  },

  { type: "number", 
  name: "secondNumber", 
  message: "Enter second number" },
  { message: "select one of the operators to perform operation", 
  type: "list",
  name: "operator",
  choices: [ "Addition" , "Subtraction" , "Multiplication" , "Division"]

},
]);

// console.log(answer);
// CONDITIONAL STATEMENT OUTPUT YOUR PROJECT:::

if (answer.operator === "Addition") {


  console.log("your Answer is::", answer.firstNumber + answer.secondNumber);
}
else if(answer.operator === "Subtraction") {
  console.log("your Answer is::", answer.firstNumber - answer.secondNumber);
}
else if(answer.operator === "Multiplication") {
  console.log("your Answer is::", answer.firstNumber * answer.secondNumber);
}
else if(answer.operator === "Division") {
  console.log("your Answer is::", answer.firstNumber / answer.secondNumber);
}
else {
  console.log("please select operator::")
}
