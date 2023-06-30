// This line is assigning the element with the ID "generate" to the 'generateBtn' variable. 
// It uses the 'document.querySelector()' method to select the element in the HTML document.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// Here we are defining the 'writePassword() function. It generates a password by calling the 'generatePassword' function and assigns it to the 'password' variable.
// It selects the element with the ID 'password" using the document.querySelector and assigns it to the 'passwordText' variable.
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password"); 

  passwordText.value = password; // Set the 'value' property of 'passwordText' to the generated password, which updates the displayed value in the input field.
}

// Add event listener to generate button
// here we added an event listener to the 'generateBtn' button element.
// It listens for a "click" and performs the writePassword() function when the button is clicked.
generateBtn.addEventListener("click", writePassword); 

// Here we are defining the 'generatePassword' function.
// It prompts the user to enter the desired length of the password using the prompt() function.
function generatePassword() {
  var length = prompt("Enter the length of the password (between 8 and 128 characters):");
  length = parseInt(length);// The input value is stored in the length variable after parsing it as an integer using parseInt().

  // Here it is checking the 'length' is not a number '(isNan(length)' or if it is less than 8 or greater than 128.
  // If any of these conditions are true, it prompts the user to enter a valid length AGAIN!
  while (isNaN(length) || length < 8 || length > 128) {
    length = prompt("Invalid length! Please enter a number between 8 and 128:");
    length = parseInt(length);
  }

  // These lines prompt the user to select the character types they want to include in the password.
  // The confirm() function displays a confirmation message and returns true if the user clicks "OK" and false if the user clicks "Cancel". 
  // The results are stored in the corresponding variables below.
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecialChars = confirm("Include special characters?");

  // This code validates that at least one character type is selected by the user.
  // It enters a while loop that continues as long as none of the character type variables are "true". 
  // If none are selected, it displays an alert message and prompts the user again to select at least one character type.
  while (!(includeLowercase || includeUppercase || includeNumeric || includeSpecialChars)) {
    alert("You must select at least one character type!");
    includeLowercase = confirm("Include lowercase characters?");
    includeUppercase = confirm("Include uppercase characters?");
    includeNumeric = confirm("Include numeric characters?");
    includeSpecialChars = confirm("Include special characters?");
  }

  // These lines define character sets for lowercase, uppercase, numeric, and special characters. 
  // The allowedChars variable is initially an empty string.
  // If a particular character type is selected, the corresponding character set is appended to the allowedChars string.
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  var allowedChars = ""; 
  if (includeLowercase) {
    allowedChars += lowercaseChars;
  }
  if (includeUppercase) {
    allowedChars += uppercaseChars;
  }
  if (includeNumeric) {
    allowedChars += numericChars;
  }
  if (includeSpecialChars) {
    allowedChars += specialChars;
  }

  // Starting a 'for' loop that will iterate 'length; times.
  // The loop uses the variable "i" as the loop counter, Starts at 0 and increments by 1 in each iteration.
  // Magic happens using math.random, math.floor, allowedChars, and allowedChars.length.
  // The randomIndex variable will store this random number, which will be used to access a random character from the allowedChars string.

  var password = ""; // This line initializes the password variable as an empty string. This variable will store the generated password.
  for (var i = 0; i < length; i++) { 
    var randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex]; // The += operator is used to concatenate the selected character to the existing value of password.
  }

  return password; // this line returns the generated password from the generatePassword() function.
}
