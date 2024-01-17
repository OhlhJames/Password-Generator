var generateBtn = document.querySelector("#generate");
// Assignment Code

//lets user select which kinda of characters and how many characters for their password
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
    }else if(numeralConfirm === true && specialConfirm === true) {
        passwordSuperArray = numerals.concat(special)
    }else if(lowercaseConfirm === true){
        passwordSuperArray = lowercase
    }else if(uppercaseConfirm === true){
        passwordSuperArray = uppercase
    }else if(numeralConfirm === true){
        passwordSuperArray = numerals
    }else if(specialConfirm === true){
        passwordSuperArray = special
    }
    passwordLength = prompt("how long did you need your password to be? select a number between 8 and 128")
    if(passwordLength<8 || passwordLength>128){
        alert("Please select a number between 8 and 128")
        passwordLength = prompt("how long did you need your password to be? select a number between 8 and 128")
    }
    writePassword();
}  

//Sets arrays to access for password generation and an empty array the store password in
var passwordSuperArray = []
var numerals =[0,1,2,3,4,5,6,7,8,9]
var lowercase = [...'qwertyuiopasdfghjklzxcvbnm']
var special = ['!', '@', '#', '$', '%', '^', "&", '*',]
var uppercase = [... 'QWERTYUIOPASDFGHJKLZXCVBNM']

//assigns random characters to the empty password array
function passwordCharacter(){
    let i = Math.floor(Math.random() * passwordSuperArray.length-1)
    return passwordSuperArray[i]
}

function generatePassword(){
    var passwordArray = []
    while(passwordArray.length < passwordLength){
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
generateBtn.addEventListener("click", characterSelector);
