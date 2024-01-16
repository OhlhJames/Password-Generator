var passwordSuperArray = []
function characterSelector(){
    var specialConfirm = confirm("did you need special characters?")
    var numeralConfirm = confirm("did you need numeral characters?")
    var uppercaseConfirm = confirm("did you need uppercase characters?")
    var lowercaseConfirm = confirm("did you need lowercase characters?")
    if (lowercaseConfirm !== true && uppercaseConfirm !== true && numeralConfirm !== true && specialConfirm !== true){
        alert("Please select at least character type!")
        characterSelector();
    }else if (lowercaseConfirm === true && uppercaseConfirm === true && numeralConfirm === true && specialConfirm === true){
        passwordSuperArray = special.concat(numerals, lowercase, uppercase); 
    }else if(lowercaseConfirm === true && uppercaseConfirm === true && numeralConfirm === true){
        passwordSuperArray = numerals.concat(lowercase, uppercase)
    }else if(uppercaseConfirm === true && numeralConfirm === true && specialConfirm === true){
        passwordSuperArray = special.concat(numerals, uppercase)
    }else if(lowercaseConfirm === true && numeralConfirm === true && specialConfirm === true){
        passwordSuperArray = special.concat(numerals, lowercase)
    }else if(lowercaseConfirm === true){
        passwordSuperArray = lowercase
    }else if(uppercaseConfirm === true){
        passwordSuperArray = uppercase
    }else if(numeralConfirm === true){
        passwordSuperArray = numerals
    }else if(specialConfirm === true){
        passwordSuperArray = special
    }else if(lowercaseConfirm === true && specialConfirm === true){
        passwordSuperArray = lowercase.concat(special)
    }else if(lowercaseConfirm === true && numeralConfirm === true){
        passwordSuperArray = lowercase.concat(numerals)
    }else if(lowercaseConfirm === true && uppercaseConfirm === true){
        passwordSuperArray = lowercase.concat(uppercase)
    }else if(uppercaseConfirm === true && numeralConfirm === true){
        passwordSuperArray = uppercase.concat(numerals)
    }else if(uppercaseConfirm === true && specialConfirm === true){
        passwordSuperArray = uppercase.concat(special)
    }
    generatePassword()
}   

var minLength = prompt("How short can your password be:", "enter number")
var maxLength = prompt("How long can your password be:", "enter number")
var numerals =[0,1,2,3,4,5,6,7,8,9]
var lowercase = [...'qwertyuiopasdfghjklzxcvbnm']
var special = ['!', '@', '#', '$', '%', "^", "&", '*',]
var uppercase = [... 'QWERTYUIOPASDFGHJKLZXCVBNM']

function passwordCharacter(){
    let i = Math.floor(Math.random() * passwordSuperArray.length-1)
    return passwordSuperArray[i]
}
function passwordLength(){
        min = Math.ceil(minLength);
        max = Math.floor(maxLength);
        return Math.floor(Math.random() * (max - min) + min);
}
function generatePassword(){
    var passwordArray = []
    while(passwordArray.length < passwordLength()){
        passwordArray.push(passwordCharacter());
    }
    var passwordString = ''
    passwordString = passwordArray.join("");
    return passwordString;
}
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", characterSelector);
