// Assignment code here
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYW"
  var special = "!@#$%^&*(){}[]<>=-_+/?~|"
  var number = "0123456789"
  var characterSet = "";
  var password = "";
  var passwordLength = prompt(
      "Enter a number between 8 to 128 to determine how many charachters will be in your password"
  );
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Oh No! You didnt enter a number from 8 through 128.");        
      return;
  } else {
     
      var specialChar = confirm(
          "Click OK to include special characters"
      );
      var numericChar = confirm(
          "Click OK to include numbers"
      );
      var lowerCaseChar = confirm(
          "Click OK to include lowercase characters"
      );
      var upperCaseChar = confirm(
          "Click OK to include uppercase characters"
      );
  }
  if (lowerCaseChar) {
      characterSet += lowercase;
  }
  if (upperCaseChar) {
      characterSet += uppercase;
  }
  if (specialChar) {
      characterSet += special;
  }
  if (numericChar) {
      characterSet += number;
  }
  for (i = 0; i < passwordLength; i++) {
      password += characterSet[Math.floor(Math.random() * characterSet.length)]
  }
  return(password);
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
