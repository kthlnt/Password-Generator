//create variables
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-']

//function for alert message and password criteria options
function getPasswordCriteria() {
  var userChoseNumbers = confirm("Do you want numbers in your password?");
  var userChoseLowerCase = confirm("Do you want lower case letters in your password?");
  var userChoseUpperCase = confirm("Do you want upper case letters in your password?");
  var userChoseSpecialCharacters = confirm("Do you want special characters in your password?")
  var options = {
    userChoseNumbers: userChoseNumbers,
    userChoseLowerCase: userChoseLowerCase,
    userChoseUpperCase: userChoseUpperCase,
    userChoseSpecialCharacters: userChoseSpecialCharacters,
    
  };
  return options;
}

function createRandom(length) {
  var randomNum = Math.floor(Math.random() * length);
  return randomNum;
}

function generatePassword() {
    var userChose = getPasswordCriteria();
    var availableChars = [];
    var passwordArr = [];
    if(userChose.userChoseNumbers) {
      availableChars = availableChars.concat(numbers);
    }
    if(userChose.userChoseLowerCase) {
      availableChars = availableChars.concat(lowercaseLetters);
    }
    if(userChose.userChoseUpperCase) {
      availableChars = availableChars.concat(uppercaseLetters);
    }
    if(userChose.userChoseSpecialCharacters) {
      availableChars = availableChars.concat(specialCharacters)
    }

    for(var i = 0; i < 12; i++) {
      passwordArr.push(availableChars[createRandom(availableChars.length)])
    }


  return passwordArr.join("")
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)