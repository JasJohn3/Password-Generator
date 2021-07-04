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
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

var getRandomUpper = function(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

var getRandomNumber = function(){
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
// Functions for selecting a random string value from char codes

// Functions for selecting a random string value from special characters string
var getRandomSpecial = function(){
  const specialCharacters = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;
  return specialCharacters[(Math.floor(Math.random()*specialCharacters.length))];
}
// Functions for selecting a random string value from special characters string
//______________________________ Random String Values Functions ______________________________
//________________________ Random String Values Function Call Object ____________________________
const randomFunctionCall ={
  hasUpper: getRandomUpper,
  hasLower: getRandomLower,
  hasNumber: getRandomNumber,
  hasSpecial: getRandomSpecial
}
//________________________ Random String Values Function Call Object ____________________________
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
  // Counter to store number of selected settings
  const typesCount = hasUpper + hasLower + hasNumber + hasSpecial;
  // Filter the array to exclude any values that were not selected by the user
  const typesArray = [{hasUpper}, {hasLower}, {hasNumber}, {hasSpecial}].filter
  (
    item => Object.values(item)[0]
  );
  
  if(typesCount === 0){
    alert('You did not select any settings for your password! Please select settings from the options menu!');
    return;
  }
  // Iterate by the number of true values selected
  for (let i = 0; i < passwordLength; i+= typesCount) {
    // Utilize a for each loop that performs key comparisons and calls functions stored in randomFunctionCall object
    typesArray.forEach(item =>{
      // Grab a key value from the typesArray
      const functionCall = Object.keys(item)[0];
      // Compare the key values to the values in the randomFunctionCall object
      generatedPassword += randomFunctionCall[functionCall]();
    });
    
  }
  //[User Data Validation] If the password is longer than the user selected length, remove remaining character values
  const result =(generatedPassword.slice(0,passwordLength));
  return result;
}

//______________________________ Password Length Function ______________________________
// Password Length Function that validates the user input and alerts if there are invalid values
var getPasswordLength = function(){
  var setPasswordLength = passwordLength.value;
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
//______________________________ Clipboard Copy and Paste Function ______________________________
// References: https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
function clipboardButtonEvent (){
  const textArea = document.createElement('textarea');
  const password = passwordText.value;
  console.log(password);
  if(!password){
    alert('No Password appears to be available! Press the Generate Password button to create a password!');
    return;
  }
  textArea.value = password;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy')
  textArea.remove();
  alert('Password copied to clipboard!');
}
//______________________________ Clipboard Copy and Paste Function ______________________________


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
clipboardButton.addEventListener('click', clipboardButtonEvent);
