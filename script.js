// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var int = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

// Write password to the #password input

function getPrompt() {
  var userLength = parseInt(prompt("Select a number between 8 and 128."));
  if (userLength < 8 || userLength > 128){
    alert("Number needs to be between 8 and 128.")
  } else if (Number.isNaN(userLength)) {
    alert("Needs to be a number.")
  }
  var userLower = confirm("Do you want lower case letters?");
  var userUpper = confirm("Do you want upper case letters?");
  var userInt = confirm("Do you want numbers?");
  var userSpecial = confirm("Do you want special characters?");

  if (userLower == false && 
    userUpper == false && 
    userInt == false && 
    userSpecial == false ) {
      alert("Must select at least one selection.")
    }
    
  var array = []

  if (userLower == true) {
    array = array.concat(lowerCase);
  }
  
  if (userUpper == true) {
    array = array.concat(upperCase);
  }
  
  if (userInt == true) {
    array = array.concat(int);
  }
  
  if (userSpecial == true) {
    array = array.concat(specialChar);
  }

  for (i = 0; i < userLength; i++) {
    var random = Math.floor(Math.random() * array.length);
    console.log(array);
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", getPrompt);

