// Assignment Code
var generateBtn = document.querySelector("#generate");
specialConfirm = false
uppercaseConfirm = false
numeralConfirm = false
lowercaseConfirm = false
function characterSelector(){
    var characterConfirm = prompt("Please enter a character type you need (ex. Special, Number, Uppercase, Lowercase):", "enter type");
    if (characterConfirm === "Special") {
        specialConfirm = true;
        var additionalConfirm = confirm("did you need more character types?")
        if (additionalConfirm === true){
            characterSelector()
        }
    }else if(characterConfirm === "Number") {
        numeralConfirm = true;
        var additionalConfirm = confirm("did you need more character types?")
        if (additionalConfirm === true){
            characterSelector()
        }
    }else if(characterConfirm === "Uppercase") {
        uppercaseConfirm = true;
        var additionalConfirm = confirm("did you need more character types?")
        if (additionalConfirm === true){
            characterSelector()
        }
    }else if(characterConfirm === "Lowercase"){
        lowercaseConfirm = true
        var additionalConfirm = confirm("did you need more character types?")
        if (additionalConfirm === true){
            characterSelector()
        }
    } else if (lowercaseConfirm === true && uppercaseConfirm === true && numeralConfirm === true && specialConfirm === true){
        alert("all characters selected!")
    }else {
        alert("please select at least one character type");
        characterSelector();
    }
}
characterSelector()
var minLength = prompt("How short can your password be:", "enter number")
var maxLength = prompt("How long can your password be:", "enter number")
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
    }else if (lowercaseConfirm === true) {
        return normalCharacter();
    
    }
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
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
