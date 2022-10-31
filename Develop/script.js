// Assignment Code

// Assignment code here
//--------------------------------------------//
//variables




//true is the ok button
//false is cancel button



//functions

function randInt(min, max){
  if(!max){
    max=min
    min=0
  }
  var random = Math.random()
  return Math.floor(min*(1-random)+random*max)


}

function getRandChoice(list){
  return list[randInt(list.length)]

}






//when generate button clicked, prompts appear
//generate password function
function generatePassword(){

 //ask for number of characters wanted in password
 var userInput= prompt("How many characters would you like?");
 var pwLength = parseInt(userInput);

if (isNaN(pwLength)){
  alert("Please use a number.")
};

 //if number of characters are less than 8 
 //write message requesting that password is 8 chars at least

 //if number of chars are more than 128
 //write message requesting that password is less than 129 chars

if (pwLength<8 || pwLength>128){
  alert("Password must be between 8 and 128 characters")
};

//if number of chars are valid

//ask what kind of characters are wanted
 var askForUpper= confirm("Would you like upper case letters?")
 var askForLower = confirm("Would you like lowercase letters?")
 var askForNum = confirm("Would you like numbers?")
 var askForSpecials = confirm("Would you like special characters?")
 
 
 
 var upperLetters = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
 var lowerLetters = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
 var numbers= String.fromCharCode(Math.floor(Math.random() * 10) + 48);
 var specialChar=["#" ,"$", "%", "&", "*", "+", "/" ,"<", "=", ">", "?","@", "~"]


 //Puts all criteria in one variable
 var criteria=[]

if (askForUpper===true){
  criteria.push(upperLetters)
}

if(askForLower===true){
  criteria.push(lowerLetters)
}

if(askForNum===true){
  criteria.push(numbers)
}

if(askForSpecials===true){
  criteria.push(specialChar)
}

//validate that atleast 1 character type is picked(letter, number, or special)

if(criteria.length===0){
  criteria.push(lowerLetters)
}



var generatedPassword=""



for(i=0; i<pwLength; i++){
  var randomList = getRandChoice(criteria)
  var randomChar = getRandChoice(randomList)
  generatedPassword+=randomChar
};

//a password that matches selected criteria will be shown in an alert OR printed to text box
return generatedPassword
}















































var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
