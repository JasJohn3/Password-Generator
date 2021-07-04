# Password-Generator

## Description
Password Generator creates a unique password consisting of 8 to 128 possible characters of various type.  These passwords are randomly generated from four possible settings Uppercase Letters, Lowercase Letters, Numbers and Special Characters.
___
## Table of Contents
* Setup
* Coding Highlights
  * Random character generation  using charcode
  * Using filter method to remove false values
  * Assinging function calls to javascript object
  * Nested for loops to iterate through arrays
  * Copy to clipboard feature
* References
* Conclusion
___

## Setup
visit: [Password-Generator](https://jasjohn3.github.io/Password-Generator/)
### Select Settings

### Generate Password & Copy to Clipboard features

___

## Coding Highlights

### Random character generation  using charcode
To generate a random character, I utilized three methods from the javascript library String.fromCharCode, Math.Floor, and Math.Random.  To acquire the charcodes, this site was used as a reference for the codes [Charset](https://net-comber.com/charset.html)

#### Sample Code
```javscript 
var getRandomLower = function(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}   
```
To implement: 
1. We find the charset value and add to our Random Mehtod. In this example the value is 97.  
2. Then multiply our Math.Random * 26, as there are 26 letters in the alphabet.
3. Finally, we wrap the Random method with the String.fromCharCode method.
4. Result: This generates a single character at random that is a lowercase letter.
### Using filter method to remove false values

### Assinging function calls to javascript object

### Nested for loops to iterate through arrays

### Copy to clipboard feature

___

## References
1. [Clipboard](https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f)
2. [Charset](https://net-comber.com/charset.html)
3. [Tutorial](https://www.youtube.com/watch?v=duNmhKgtcsI&ab_channel=TraversyMedia)
___
## Conclusion
Overall, this project was an excelent lesson in various javascript methods and tools.  The coding highlights segment acts as a future reference guide for some advanced coding techniques.  I want to offer a special thanks to [Traversymedia](https://www.traversymedia.com/) for the tutorial that made this project come together.