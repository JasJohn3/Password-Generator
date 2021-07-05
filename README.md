# Password-Generator
___
## Description
___
Password Generator creates a unique password consisting of 8 to 128 possible characters of various type.  These passwords are randomly generated from four possible settings Uppercase Letters, Lowercase Letters, Numbers and Special Characters.
___
## Table of Contents
___
* [Setup](#setup)
* [Coding Highlights](#coding-highlights)
  * [Random Character Generation](#random-character-generation)
  * [Function Call Object](#function-call-object)
  * [Filter Method](#filter-method)
  * [Nested Loops](#nested-loops)
  * [Clipboard](#clipboard)
* [References](#references)
* [Conclusion](#conclusion)
___

## Setup
___
visit: <a href="https://jasjohn3.github.io/Password-Generator/" target="_blank" rel="noreferrer noopener">https://jasjohn3.github.io/Password-Generator/</a>
### Select Settings
1. Set your password length between 8 and 128 characters.
2. Select what kind of character types you wish to have Uppercase, Lowercase, Numbers, or Special Characters.
### Generate Password & Copy to Clipboard features
1. Press the Generate Password Button after creating your password settings.
2. Press the Copy button to copy your password to the clipboard to paste.
___

## Coding Highlights
___
### Random Character Generation
#### Sample Code
```javascript 
var getRandomLower = function(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}   
```
To generate a random character, I utilized three methods from the javascript library String.fromCharCode, Math.Floor, and Math.Random.  To acquire the charcodes, this site was used as a reference for the codes [Charset](https://net-comber.com/charset.html)


To implement: 
1. We find the charset value and add to our Random Mehtod. In this example the value is 97.  
2. Then multiply our Math.Random * 26, as there are 26 letters in the alphabet.
3. Finally, we wrap the Random method with the String.fromCharCode method.
4. Result: This generates a single character at random that is a lowercase letter.
___
### Function Call Object
#### Sample Code
```javascript 
const randomFunctionCall ={
  hasUpper: getRandomUpper,
  hasLower: getRandomLower,
  hasNumber: getRandomNumber,
  hasSpecial: getRandomSpecial
}
```
Here we create an object of key value pairs where the values are the functions we will be using.  Naming convention is extremely important for this code to work correctly later in the project code.  The Keys in our object must match the Keys in the array we will be using.
#### Sample Code
```javascript 
const typesArray = [{hasUpper}, {hasLower}, {hasNumber}, {hasSpecial}]
```
Addtional trick is to wrap our variables in brackets {} creating a key value of the same variable name eg... {hasUpper} =[key: hasUpper, value: hasUpper].
___
### Filter Method
#### Sample Code
```javascript 
  const typesArray = [{hasUpper}, {hasLower}, {hasNumber}, {hasSpecial}].filter
  (
    item => Object.values(item)[0]
  );
```
Here we use the Array.filter() method that requires an inline function to be created.  Much like the forEach method, we create a variable called item that will select a single value stored in the array. Then, using the Object.values method, we filter any item that has a false value Object.values(item)[0];
___
### Nested Loops
#### Sample Code
```javascript 
  for (let i = 0; i < passwordLength; i+= typesCount) {
    // Utilize a for each loop that performs key comparisons and calls functions stored in randomFunctionCall object
    typesArray.forEach(item =>{
      // Grab a key value from the typesArray
      const functionCall = Object.keys(item)[0];
      // Compare the key values to the values in the randomFunctionCall object
      generatedPassword += randomFunctionCall[functionCall]();
    });
    
  }
```

Here, we use a standard for loop to iterate through our arrays.  The first for loop uses the password length set by the user and iterates based on the number of settings selected by the user typesCount.

The Nested loop is utilizing an Array method called Array.forEach.  Like the filter method, we define a variable called item that selects a value stored in the array.  Then, we use the Object.key's method to compare the key value to the key values stored in our randomFunctionCall object created earlier.  The () is added to ensure that each function called will be executed when the value is selected.
___
### Clipboard
#### Sample Code
```javascript 
var clipboardButton = document.getElementById('clipboard');
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
clipboardButton.addEventListener('click', clipboardButtonEvent);
```
Here we create a copy to clipboard button by following this specific guide [Clipboard](https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f).
___

## References
___
1. [Clipboard](https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f)
2. [Charset](https://net-comber.com/charset.html)
3. [Tutorial](https://www.youtube.com/watch?v=duNmhKgtcsI&ab_channel=TraversyMedia)
___
## Conclusion
___
Overall, this project was an excelent lesson in various javascript methods and tools.  The coding highlights segment acts as a future reference guide for some advanced coding techniques.  I want to offer a special thanks to [Traversymedia](https://www.traversymedia.com/) for the tutorial that made this project come together.