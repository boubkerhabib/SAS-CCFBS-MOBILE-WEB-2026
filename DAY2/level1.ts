/*
⭐ Level 1 — Beginner
Exercise 1: Grade Checker
Write a TypeScript program that stores a student's score in a variable and prints the correct message based on the following conditions:

Score	Message
>= 90	"Excellent!"
>= 70	"Good job!"
>= 50	"You passed."
Below 50	"Failed."
Requirements:

Use let to declare the score variable with a number type
Use if / else if / else to check the conditions
Test your code with at least 3 different scores
Expected output example (score = 83):
Good job!


*/
let score : number = 83;
if (score >= 90){
    console.log("Excellent!");
}else if(score >= 70){
    console.log("Good job!");
}else if(score >= 50){
    console.log("You passed!");
}else if(score < 50){
    console.log("Failed!");

}