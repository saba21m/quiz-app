#! /use/bin/env node
import inquirer from "inquirer";

const quiz: {
     question_1: string;
     question_2: string;
     question_3: string;
     question_4: string;
     question_5: string;
} = await inquirer.prompt(
    [
    {
        name: " question_1",
        type: "list",
        message: "What is TypeScript primarily used for?",
        choices: [" A. Memory Management","B. Dynamic Typing", "C. Static Typing","D. Asynchronous operations"]
    },
    {
        name: " question_2",
        type: "list",
        message: "Which of the following is NOT a valid TypeScript data type??",
        choices: [" A. void","B. any", "C. dynamic","D. tuple"]
    },
    {
        name: " question_3",
        type: "list",
        message: "How do you denote a variable as readonly in TypeScript?",
        choices: ["A. const","B. static", "C. readonly","D. fixed"]
    },
    {
        name: " question_4",
        type: "list",
        message: "How do you specify that a function does not return anything in TypeScript?",
        choices: [" A. function myFunc(): undefined","B. function myFunc(): void", "C. function myFunc(): null","D. function myFunc(): None"]
    },
    {
        name: " question_5",
        type: "list",
        message: " How do you define a custom type in TypeScript?",
        choices: [" A. interface","B. typedef", "C. type","D. Both A and C"]
    },
]
);

let score : number = 0;

switch(quiz.question_1){
 case "C. Static Typing":
    console.log("1.correct");
    ++score;
    break;
    default:
        console.log("1.incorrect");
        
}
switch(quiz.question_2){
    case "C. dynamic":
       console.log("2.correct");
       ++score;
       break;
       default:
           console.log("2.incorrect");
           
   }
   switch(quiz.question_3){
    case "C. readonly":
       console.log("3.correct");
       ++score;
       break;
       default:
           console.log("3.incorrect");
           
   }
   switch(quiz.question_4){
    case "B. function myFunc(): void":
       console.log("4.correct");
       ++score;
       break;
       default:
           console.log("4.incorrect");
           
   }
   switch(quiz.question_5){
    case "D. Both A and C":
       console.log("5.correct");
       ++score;
       break;
       default:
           console.log("5.incorrect");
           
   }

   console.log(`Score: ${score}`);
   
