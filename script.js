// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = [...'qwertyuiopasdfghjklzxcvbnm']
var special = ['!', '@', '#', '$', '%', "^", "&", '*',]
var uppercase = [... 'QWERTYUIOPASDFGHJKLZXCVBNM']
var passwordArray =[]

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
function generatePassword(){
    let i = Math.floor(Math.random() * 3)
    let characterChoice = i
    if (characterChoice === 1){
        return normalCharacter();
    } else if (characterChoice ===2){
        return caiptalizedCharacter();
    } else {
        return specialCharacter();
    }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
