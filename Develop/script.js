// Assignment Code

// Assignment code here
//--------------------------------------------//
//variables


var numbers=["0","1","2","3","4","5","6","7","8","9"];
var specialChar=["#" ,"$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/" ,":", ";" , "<", "=", ">", "?","@", "[",  "" , "]" ,"{", "|", "}", "~"]




var isUpper = true;

//true is the ok button
//false is cancel button



//functions
function randUpper(){
  window.confirm("Uppercase letters?")
  if(isUpper){
    String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    return;
  }
}

function randLower(){
  window.confirm("Lowercase letters?")
  String.Math.floor(Math.random()*0)+26
  document.querySelector("placeholder")
}

function randNum(){
  

}

function randSpecial(){

}







//generate password function
function generatePassword(){
 var userInput= prompt("How many characters would you like?");
 var pwLength = parseInt(userInput);

if (isNaN(pwLength)){
  alert("Please use a number.")
};

if (pwLength<8 || pwLength>128){
  alert("Password must be between 8 and 128 characters")
};

 var askForUpper= confirm("Would you like upper case letters?")
 var askForLower = confirm("Would you like lowercase letters?")

 var upperLetters = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
 var lowerLetters = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}


//when generate button clicked, prompts appear
for(i=0; i<1; i++){
  
//ask for number of characters wanted in password


//if number of characters are less than 8 
};

//write message requesting that password is 8 chars at least

//or if number of chars are more than 128

//write message requesting that password is less than 129 chars

//if number of chars are valid

//ask what kind of characters are wanted

//validate that atleast 1 character type is picked(letter, number, or special)

//a password that matches selected criteria will be shown in an alert OR printed to text box




generatePassword();


































var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
