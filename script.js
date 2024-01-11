// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = [...'qwertyuiopasdfghjklzxcvbnm']
var special = ['!', '@', '#', '$', '%', "^", "&", '*',]
var uppercase = [... 'QWERTYUIOPASDFGHJKLZXCVBNM']
var passwordlengths = prompt('How long did you need the password to be?', 'enter length')
var characterRequirement = prompt('What kinds of characters did you need? (special, number, uppercase, lowercase)', 'enter types')
function normalCharacter(){
    let i = Math.floor(Math.random() * (lowercase.length-1))
    return lowercase[i]
}
function caiptalizedCharacter(){
    let i = Math.floor(Math.random() * (uppercase.length-1))
    return uppercase[i]
}
function specialCharacter(){
    let i = Math.floor(Math.random() * (special.length -1))
    return special[i]
}
function passwordCharacter(){
    let i = Math.floor(Math.random() * 4)
    let characterChoice = i
    if (characterChoice === 0){
        return Math.floor(Math.random() * 9);
    } else if (characterChoice === 1){
        return normalCharacter();
    } else if (characterChoice === 2){
        return caiptalizedCharacter();
    }else {
        return specialCharacter();
    }
}
function passwordLength(){
        min = Math.ceil(8);
        max = Math.floor(128);
        return Math.floor(Math.random() * (max - min) + min);
}
function generatePassword(){
    var passwordArray = []
    for(i=0; i<= passwordLength(); i++){
        passwordArray.push(passwordCharacter());
    }
    var passwordString = ''
    passwordString = passwordArray.join("");
    return passwordString;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
