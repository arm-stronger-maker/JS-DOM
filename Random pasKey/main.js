const showPassword = document.getElementById('password');
let length = 12;

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerCase = "abcdefghijklmnopqrstuvwxyz"
let numbers = "0123456789"
let symbols = "!@#$%^&*?"

let FullChars = upperCase + lowerCase + numbers + symbols;

function generatePassWord(){
        let password = ''
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];
        password += symbols[Math.floor(Math.random() * symbols.length)]

        while(length>password.length){
            password += FullChars[Math.floor(Math.random() * FullChars.length)];
        }

        showPassword.value = password;
}

function copyPassWord(){
    showPassword.select();
    document.execCommand('copy');
}