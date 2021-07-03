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
//______________________________ Random String Values Function Call Object ______________________________
const randomFunctionCall ={
  hasUpper: getRandomUpper,
  hasLower: getRandomLower,
  hasNumber: getRandomNumber,
  hasSpecial: getRandomSpecial
}

//______________________________ Random String Values Function Call Object ______________________________
// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  passwordText.value = password;
}

var generatePassword = function(){
  var generatedPassword ='';
  const passwordLength = getPasswordLength();
  const hasUpper = uppercase.checked;
  const hasLower = lowercase.checked;
  const hasNumber = numbers.checked;
  const hasSpecial = special.checked;

  const typesCount = hasUpper + hasLower + hasNumber + hasSpecial;
  // Filter the array to exclude any values that were not selected by the user
  const typesArray = [{hasUpper}, {hasLower}, {hasNumber}, {hasSpecial}].filter
  (
    item => Object.values(item)[0]
  );
  console.log(typesCount);
  console.log(typesArray);
  
  if(typesCount === 0){
    alert('You did not select any settings for your password! Please select settings from the options menu!');
    return;
  }
  for (let i = 0; i < passwordLength; i+= typesCount) {
    typesArray.forEach(type =>{
      // Grab a key from the typesArray
      const functionCall = Object.keys(type)[0];
      console.log(functionCall)
      console.log(randomFunctionCall);
      // Compare the key values to the values in the randomFunctionCall object
      generatedPassword += randomFunctionCall[functionCall]();
      console.log(generatePassword);
    });
    
  }
  const result =(generatedPassword.slice(0,passwordLength));
  return result;
}

//______________________________ Verify User Password Settings Function ______________________________
var passwordSettings = function(){


}
//______________________________ Verify User Password Settings Function ______________________________
//______________________________ Password Length Function ______________________________
// Password Length Function that validates the user input and alerts if there are invalid values
var getPasswordLength = function(){
  var setPasswordLength = passwordLength.value;
  console.log(setPasswordLength);
  var min = 8;
  var max = 128;

  if (setPasswordLength < min) {
    alert('Invalid Entry! You entered a value less than 8 Characters.')
    passwordLength.value = min;
    return;
  }
  if (setPasswordLength > max) {
    alert('Invalid Entry! You entered a value greater than 128 Characters.')
    passwordLength.value = max;
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
