

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var symbolChars = "~!@#$%^&*()_+{}[]||':?><";
var numberChars = "0123456789";

var allChars = "";

function generatePassword() {
  console.log("Hey Walt You clicked the button");
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
    var uppercasePrompt = confirm("Do you like to use uppercase?")
    var lowercasePrompt = confirm("Do you like to use lowercase?")
    var symbolPrompt = confirm("Do you like to use symbols?")
    var numberPrompt = confirm("Do you like to use numbers?")

    console.log(uppercasePrompt, lowercasePrompt, symbolPrompt, numberPrompt)
  if(uppercasePrompt){
    allChars += uppercase;
    //"ABCDEFGHIJKLMNOP"
  }
  if(lowercasePrompt){
    allChars += lowercase;
    //"ABCDEFGHIJKLMNOPabcdefgh"
  }
  if(symbolPrompt){
    allChars += symbolChars;
  }
  if(numberPrompt){
    allChars += numberChars;
  }

  //for loop, run it x amount of time based on passwordLength
  //randomize allChars, pick out a random value everytime loop is run
  //add the random value to password var
  }
  
  for (let i = 0; i < passwordLength; i++); 
    var password = Math.floor(Math.random() * allChars);
    allChars.substring(password);
    console.log(password);
    return password;

}


  
  // 2. Validate the input 
  //3. Display the generated password on the page.



  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  console.log(passwordText)

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
