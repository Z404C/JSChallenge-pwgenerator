// Assignment Code

// Assignment code here
//--------------------------------------------//
//variables
var upperLetters=["A","B","C","D","E","F","G","H","I","J","K", "L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerLetters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers=["0","1","2","3","4","5","6","7","8","9"];
var specialChar=["#" ,"$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/" ,":", ";" , "<", "=", ">", "?","@", "[",  "" , "]" ,"{", "|", "}", "~"]


//functions

//when generate button clicked, prompts appear

//ask for number of characters wanted in password

//if number of characters are less than 8 

//write message requesting that password is 8 chars at least

//or if number of chars are more than 128

//write message requesting that password is less than 129 chars

//if number of chars are valid

//ask what kind of characters are wanted

//validate that atleast 1 character type is picked(letter, number, or special)

//a password that matches selected criteria will be shown in an alert OR printed to text box


































var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
