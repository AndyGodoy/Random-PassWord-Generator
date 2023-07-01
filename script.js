// This line is assigning the element with the ID "generate" to the 'generateBtn' variable. 
// It uses the 'document.querySelector()' method to select the element in the HTML document.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// The writePassword function generates a password by calling the generatePassword function and assigns it to the password variable.
// Declared a variable 'passwordText' and assigned the element with attribute of 'ID #password'
function writePassword() { 
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password"); 

// Set the 'value' property of 'passwordText' to the generated password, which updates the displayed value in the input field.
  passwordText.value = password;
}
// Add event listener to generate button
// here we added an event listener to the 'generateBtn' button element.(DOM for refrence)
// It listens for a "clic4k" and performs the writePassword() function when the button is clicked.
generateBtn.addEventListener("click", writePassword); 

// Phase 1- creating a variable and getting the info we need
// Must prompt user for length (8-128)
// created 'generatePassword' function and inside added a variable 'length'
// length variable stores the length of the password entered by the user.
// It prompts the user to enter the desired length of the password using the prompt() function.
function generatePassword() {
  var length = prompt("Please enter length of the password (8 - 128 characters)");
  
  // parseInt takes a string as its argument and attempts to parse it and return an integer value
  // The input value is stored in the length variable
  length = parseInt(length);


// What do we need to track? 	
// Create a password variable that is an EMPTY STRING	
// Create a FOR Loop that runs length number of times	
// Inside the for loop we need to generate a single random character and uppend this character to
// Referencing MDZLA and W3. 
// while (condition){ Code to be executed repeatedly
// SYNTAX! isNaN(value)
// It is checking the 'length' is not a number '(isNan(length)' or if it is less than 8 or greater than 128.
// If any of these conditions are true, it prompts the user to enter a valid length AGAIN!
   while (isNaN(length) || length < 8 || length > 128) {
    // The value entered by the user is stored in the length variable.
    length = prompt("Invalid length! Please enter a number between 8 and 128:");
     // parseInt() Converting length to an integer. 
    length = parseInt(length);  
  }

// Confirm user for the upper/lower case (yes/no? USE CONFIRM)	
// Confirm user is theydlike to use special characters and numbers	
// Create a pool of available characters (lowercase,uppercase,numbers,speacial characters)	
//var availablechars = ["a","b","c"],	
// THINK about edge cases for bad length inputs**	


// Finally making some variables and assigning them a Function!!
// I am assigning all the variables here the confirm() Function
// Asking the user for confirmation!
// These lines prompt the user to select the character types they want to include in the password.
// The confirm() function displays a confirmation message and returns true if the user clicks "OK"
// And false if the user clicks "Cancel". 
// The results are stored in the variables below.
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");  
  var includeSpecialChars = confirm("Include special characters?");
  // Use these variables to determine which character sets to include when generating the password


// CONDITIONS!! will keep running as long as the specified condition is true.
// Confirms that at least one character type is selected by the user.
// Note: ! operator description is "NOT"
// It enters a WHILE loop that continues as long as none of the character type variables are "true". 
// If none are selected, it displays an alert message and prompts the user again to select at least one character type.
// After confirm() is executed for all the character type prompts,
// the loop goes back to the beginning, and the condition is checked again.   
  while (!(includeLowercase || includeUppercase || includeNumeric || includeSpecialChars)) {
    alert("You must select at least one character type!"); // Added Alert() inside the loop to prompt message
    includeLowercase = confirm("Include lowercase characters?");
    includeUppercase = confirm("Include uppercase characters?");
    includeNumeric = confirm("Include numeric characters?");
    includeSpecialChars = confirm("Include special characters?"); 
  } // Values from the confirm() function overwrite the previous values of the character type variables.
// This code ensures that the user selects at least ONE character type by repeadetly showing prompt alerts!



// Four variables and each is assigned a STRING of SPECIFIC characters
  // These lines define character sets for lowercase, uppercase, numeric, and special characters. 
  // The allowedChars variable is initially an empty string.
  // If a particular character type is selected, the corresponding character set is appended to the allowedChars string.
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";   //is there a better way to do this???
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// New variable allowedChars created but with an empty string ""
  var allowedChars = ""; // This variable will store the characters that are allowed for generating the password.
  // Check certain conditions using IF statements 
  if (includeLowercase) { 
    allowedChars += lowercaseChars; //concatenating lowercaseChars string to exisiting value allowedChars
  }                                // This appends all lowercase chars to the allowedChars string
  if (includeUppercase) {
    allowedChars += uppercaseChars;
  }
  if (includeNumeric) {
    allowedChars += numericChars;
  }
  if (includeSpecialChars) {          
    allowedChars += specialChars; // If any of these variables are true, the function will execute
  }


// FOR LOOP STEPS	------
// Create a random number as the index.  between 0 and length of our available pool characters array (randomNum)	
// Select 1 element from array of allowedChars at index of the random number we generated	
// var newChar = allowedChars[randomNum]	
// Append this new element to password variable	
// RETURN password we just created	****
  // Starting a 'for' loop that will iterate 'length; times.
  // The loop uses the variable "i" as the loop counter, Starts at 0 and increments by 1 in each iteration.
  // Magic happens using math.random, math.floor, allowedChars, and allowedChars.length.
  // The randomIndex variable will store this random number, which will be used to access a random character from the allowedChars string.

  var password = ""; // This line initializes the password variable as an empty string. This variable will store the generated password.
  for (var i = 0; i < length; i++) { 
    var randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex]; 
  }

  return password; // this line returns the generated password from the generatePassword() function.
}
