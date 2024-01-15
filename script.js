// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialConfirm = confirm("Do you need special characters?");
var numeralConfirm = confirm("Do you need numerals?");
var uppercaseConfirm = confirm("Do you need uppercase characters?");
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
    let i = Math.floor(Math.random() * 4)
    let characterChoice = i
    if (characterChoice === 0 && numeralConfirm === true){
        return Math.floor(Math.random() * 9);
    } else if (characterChoice === 1 && specialConfirm === true){
        return specialCharacter();
    } else if (characterChoice === 2 && uppercaseConfirm === true){
        return caiptalizedCharacter();
    }else {
        return normalCharacter();
    
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
