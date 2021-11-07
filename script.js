// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare variables for password character types
var useUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var useLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var useNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var useSyms = [ "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "'", '"', "\\" ];


// User selects password length
var generatePassword = function() {
var lengthPmt = 0;
lengthPmt = window.prompt("Desired password length? 8 - 128 characters");

  // Exits function if CANCEL is pressed
  if (lengthPmt === null) {
    return null
  }

// Declare variables for random generation & final password
  var pword = "";
  var allowed = [];

//If password length selected is outside set parameters (8-128), throw Error and restart function
  if (parseInt(lengthPmt) < 8 || parseInt(lengthPmt) > 128) {
        lengthPmt = window.alert("Length must be between 8 and 128 characters.");
        generatePassword();
     };
  
//Confirms and data collection for character selection + validation alerts for all selections made
  if (parseInt(lengthPmt) >= 8 || parseInt(lengthPmt) <= 128) {
      console.log(lengthPmt);
    var upperC = confirm("Should upper case letters be included?")
      if (upperC == true) {
        window.alert("Upper case characters will be included. Please continue.");
        allowed = allowed.concat(useUpper);
        console.log(useUpper);
      } else {
        window.alert("Upper case characters will not be used. Please continue.");
      };

    var lowerC = confirm("Should lower case letters be included?")
      if (lowerC == true) {
        window.alert("Upper case characters will be included. Please continue.");
        allowed = allowed.concat(useLower);
        console.log(useLower);
        } else {
        window.alert("Lower case characters will not be used. Please continue.");
      };

    var nums = confirm("Should numbers be included?")
      if (nums == true) {
        window.alert("Numbers (0-9) will be included. Please continue.");
        allowed = allowed.concat(useNums);
        console.log(useNums);
      } else {
        window.alert("Numbers (0-9) will not be used. Please continue.");
      }

    var syms = confirm("Should special characters e.g. !@#$%^&*(){}[]=<>/,. be included?")
      if (syms == true) {
        window.alert("Special characters will be included. Your password will now be generated...");
        allowed = allowed.concat(useSyms);
        console.log(useSyms);
      } else {
        window.alert("Special characters will not be used. Your password will now be generated...");
      }
     
    };

 // Check whether at least 1 character selection is made, if no selections made then exit function
  if (!upperC && !lowerC && !nums && !syms) {
    alert("You must select at least one character option to generate your password!");
    return null;
    /* Re-run character confirm statements?
    upperC = confirm("Would you like to use uppercase letters?");
    lowerC = confirm("Would you like to use lowercase letters?");
    nums = confirm("Would you like to use numbers?");
    syms = confirm("Would you like to use special characters?");
    */
  };

//Create random password from selected characters
   var char = allowed 


 for (var i = 0, n = char.length; i < parseInt(lengthPmt); i++) {
   pword += char[Math.floor(Math.random() * n)];
 }

console.log(pword);
 return pword;

}


// Writes password to HTML #password element
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);