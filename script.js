// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = [...'qwertyuiopasdfghjklzxcvbnm']
var special = ['!', '@', '#', '$', '%', "^", "&", '*',]
var uppercase = [... 'QWERTYUIOPASDFGHJKLZXCVBNM']
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
    let i = Math.floor(Math.random() * 3)
    let characterChoice = i
    if (characterChoice === 1){
        return normalCharacter();
    } else if (characterChoice === 2){
        return caiptalizedCharacter();
    } else {
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
