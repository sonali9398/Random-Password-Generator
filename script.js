const passwordBox = document.getElementById("password");
// const length = 12;
var passwordLen = document.getElementById("passLen");
var strength = document.getElementById("strength");


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

passwordBox.addEventListener('input', ()=>{
    if (passwordBox.value.length > 0){
        passwordLen.style.display = 'block';
    }
    else{
        (passwordLen.style.display ='none');
    }

    if(passwordBox.value.length < 4){
        strength.innerHTML = 'weak';
        passwordBox.style.borderColor = "#ff5925";
        strength.style.color = '#ff5925';
    }
    else if(passwordBox.value.length >=4 && passwordBox.value.length < 10){
        strength.innerHTML = 'medium';
        passwordBox.style.borderColor = "yellow";
        strength.style.color = 'yellow';
    }
    else if (passwordBox.value.length >= 10){
        strength.innerHTML = 'strong';
        passwordBox.style.borderColor = "green";
        strength.style.color = 'green';
    }
})

