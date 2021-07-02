// Link for Charset: https://net-comber.com/charset.html
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var generatePassword = function(){
  
}

const randomFunc ={
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  special: getRandomSpecial
}
var getPasswordLength = function(){
  alert('Set your Password Length!');
  var passwordLength = parseInt(prompt("Enter a number between 8 - 128"));
  var min = 8;
  var max = 128;

  if (passwordLength < min) {
    alert('Invalid Entry! You entered a value less than 8 Characters.')
    getPasswordLength();
  }
  if (passwordLength > max) {
    alert('Invalid Entry! You entered a value greater than 128 Characters.')
    getPasswordLength();
  }
  if(isNaN(passwordLength)){
    alert('Invalid Entry! Value must be Numeric.')
    getPasswordLength();
  }
  return passwordLength;
}


var getRandomLower = function(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97)
}

var getRandomUpper = function(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65)
}

var getRandomNumber = function(){
  return String.fromCharCode(Math.floor(Math.random()*10)+48)
}

var getRandomSpecial = function(){
  const specialCharacters = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;
  return specialCharacters[(Math.floor(Math.random()*specialCharacters.length))];
}


console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSpecial());
// console.log(getPasswordLength());

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
