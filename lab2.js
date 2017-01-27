/**
 * Created by apple on 27/01/17.
 */
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.33) {
    computerChoice = "rock";
} else if(computerChoice <= 0.66) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
} console.log("Computer: " + computerChoice);
var compare = function(choice1,choice2){
    if (choice1 === choice2){
        return "The result is a tie!"}
    else if (choice2 === "scissors"){
        return "scissors wins"}
    if (choice2 ==="rock"){
        return "rock"}
    if (choice2 === "scissors"){
        return "scissors wins"}
    if (choice2 === "rock"){
        return "rock wins"}
    if(choice2 ==="paper"){
        return "scissors win"}}
compare(userChoice,computerChoice);
var tie = function(choice1,choice2){
    if (userChoice==computerChoice){
        return"tie"}}

