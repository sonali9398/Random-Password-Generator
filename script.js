const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const special = '~`!@#$%^&*()_-+{}[]:";<>?,./';

const allChar = upperCase + lowercase + numbers + special;

let eyeIcon = document.getElementById('eye')

function generatePassword(){
    let password = " ";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += special[Math.floor(Math.random() * special.length)];

    while( length > password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passwordBox.value = password;
} 

function copyPassword(){
    passwordBox.select();
    document.execCommand('copy');
}

eyeIcon.onclick = function(){
    if(password.type == 'password'){
        password.type = "text";
        eyeIcon.src = 'open.png'
    }
    else{
        password.type = "password";
        eyeIcon.src = "close.png"
    }
}