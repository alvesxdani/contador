// VARIÁVEL DO NÚMERO NO HTML
var currentNumber = 0;


// FUNÇÃO INCREMENTAL
function increment() {
    currentNumber = currentNumber + 1;
    document.getElementById('currentNumber').innerHTML = currentNumber;

    if(currentNumber > 0) {
        document.getElementById('currentNumber').style.color = '#000';
    }
} 

// FUNÇÃO DECREMENTAL
function decrement() {
    currentNumber = currentNumber - 1;
    document.getElementById('currentNumber').innerHTML = currentNumber;
    
    if(currentNumber <= 0) {
        document.getElementById('currentNumber').innerHTML = 0;
        alert('Não é possível negativar o número.');
        document.getElementById('currentNumber').style.color = '#fc0303';
    }
}

// FUNÇÃO LIMPAR
function cl() {
    currentNumber = 0;
    document.getElementById('currentNumber').innerHTML = 0;
}

// FUNÇÃO RANDOM
function rnd() {
    currentNumber = Math.floor(Math.random() * 100);
    document.getElementById('currentNumber').innerHTML = currentNumber;
}

