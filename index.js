#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    PKR: 277.41,
    INR: 83.78,
    EUR: 0.90,
    SAR: 3.75
};
let answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "PKR", "INR", "EUR", "SAR"],
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "PKR", "INR", "EUR", "SAR"],
    },
    {
        name: "amount",
        message: "Enter your Amount",
        type: "number",
    },
]);
let fromAmount = currency[answer.from];
let toAmount = currency[answer.to];
let amount = answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
