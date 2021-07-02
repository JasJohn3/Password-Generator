// Link for Charset: https://net-comber.com/charset.html
// Assignment code here

// All DOM elements
var passwordLength = document.getElementById('passwordLength')
var uppercase = document.getElementById('uppercase');
var lowercase = document.getElementById('lowercase');
var numbers = document.getElementById('numbers');
var special = document.getElementById('special');
var clipboardButton = document.getElementById('clipboard');
var passwordText = document.querySelector("#password");
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//______________________________ Random String Values Functions ______________________________
// Functions for selecting a random string value from char codes
var getRandomLower = function(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97)
}

var getRandomUpper = function(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65)
}

var getRandomNumber = function(){
  return String.fromCharCode(Math.floor(Math.random()*10)+48)
}
// Functions for selecting a random string value from char codes

// Functions for selecting a random string value from special characters string
var getRandomSpecial = function(){
  const specialCharacters = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;
  return specialCharacters[(Math.floor(Math.random()*specialCharacters.length))];
}
// Functions for selecting a random string value from special characters string
//______________________________ Random String Values Functions ______________________________

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  

  passwordText.value = password;

}
var generatePassword = function(){
  var length = getPasswordLength();
  console.log(length);
  var password = [];
  for (let i = 0; i < length; i++) {
    if(uppercase.checked){
      password += getRandomUpper();
      i++;
      console.log(i);
      console.log(password);
    }
    if(lowercase.checked){
      password += getRandomLower();
      i++;
      console.log(i);
      console.log(password);
    }
    if(numbers.checked){
      password += getRandomNumber();
      i++;
      console.log(i);
      console.log(password);
    }
    if(special.checked){
      password += getRandomSpecial();
      i++;
      console.log(i);
      console.log(password);
    }
    
  }
 
  return password;
}

const allRandomFunctions ={
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  special: getRandomSpecial
}
//______________________________ Password Length Function ______________________________
// Password Length Function that validates the user input and alerts if there are invalid values
var getPasswordLength = function(){
  var setPasswordLength = passwordLength.value;
  console.log(setPasswordLength);
  var min = 8;
  var max = 128;

  if (setPasswordLength < min) {
    alert('Invalid Entry! You entered a value less than 8 Characters.')
    return;
  }
  if (setPasswordLength > max) {
    alert('Invalid Entry! You entered a value greater than 128 Characters.')
    return;
  }
  if(isNaN(setPasswordLength)){
    alert('Invalid Entry! Value must be Numeric.')
    return;
  }
  return setPasswordLength;
}
//______________________________ Password Length Function ______________________________




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
