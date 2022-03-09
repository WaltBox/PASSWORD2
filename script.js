

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
/*var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var symbolChars = "~!@#$%^&*()_+{}[]||':?><";
var numberChars = "0123456789"; 

var resultArray = "";
var password = ""; */

function generatePassword() {
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var symbolChars = "~!@#$%^&*()_+{}[]||':?><";
  var numberChars = "0123456789";
  
  var resultString = "";
  var password = ""; //undefined
  // 1. Prompt the User for the password criteria
  // a. Password length between 8 and 128 characters
  var passwordLength = prompt("Please enter a password length between 8 & 128");
  console.log(passwordLength);
  
  if(passwordLength < 8 || passwordLength > 128){
    alert("Password needs to be a number between 8 & 128")
    generatePassword();
  } else {
    // b. Prompt the User if they want to include Uppercase, 
    //lowercase, symbols, and numbers.
    var uppercasePrompt = confirm("Would you like to use uppercase?")
    var lowercasePrompt = confirm("Would you like to use lowercase?")
    var symbolPrompt = confirm("Would you like to use symbols?")
    var numberPrompt = confirm("Would you like to use numbers?")

    console.log(uppercasePrompt, lowercasePrompt, symbolPrompt, numberPrompt)
  if(uppercasePrompt){
    resultString += uppercase;
    //"ABCDEFGHIJKLMNOP"
  }
  if(lowercasePrompt){
    resultString += lowercase;
    //"ABCDEFGHIJKLMNOPabcdefgh"
  }
  if(symbolPrompt){
    resultString += symbolChars;
  }
  if(numberPrompt){
    resultString += numberChars;
  }

  console.log(resultString)
  //for loop, run it x amount of time based on passwordLength
  //randomize resultString, pick out a random value everytime loop is run
  //add the random value to password var
  }
  
  for (let i = 0; i < passwordLength; i++) {
   var resultChar = resultString[Math.floor(Math.random() * resultString.length)];
   password += resultChar;
   console.log(password);
  }

  return password;
}
   

// Write password to the #password input */
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  console.log(passwordText)

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
