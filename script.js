let screen = document.getElementById("calculator-screen");
let screenValue = screen.textContent;
let firstValue = 0;
let previousOperator = null;
let waitingForSecondValue = false;


// screen pe number put karne ke liye 

function inputDigit(digit){
    if (waitingForSecondValue) {
        waitingForSecondValue = false;
        screenValue = digit;
    } else{
        screenValue = screenValue === '0' ? digit : screenValue + digit;
    }
    updateScreenDisplay();
};

// decimal number means point . put karne ke lie 

function inputDecimal(){
    if (waitingForSecondValue) {
        inputDigit('0.');
    }
    if(! screenValue.includes('.')) {
        screenValue = screenValue + '.';
    }
    updateScreenDisplay();
};

// negative values put karne ke liye 

function toggleSign(){
    if (waitingForSecondValue) {
        firstValue = screenValue;
    }
    screenValue = screenValue * -1;
    updateScreenDisplay();
}

// for square root

function getSquareRoot(){
    screenValue = Math.sqrt(screenValue);
    firstValue = screenValue;
    updateScreenDisplay();
}

// input se ek ek didgit clear karne ke liye 

function clearEntry(){
    screenValue = screenValue.slice(0, -1);
    if (screenValue.length === 0) {
        screenValue = '0';
    }
    updateScreenDisplay();
}

// all input didgit clear karne ke liye 

function allClear(){
    firstValue = 0;
    screenValue = '0';
    updateScreenDisplay();
}

// operator ke zariye operation perform karne ke lie 

function handleOperator(currentOperator){
    if (waitingForSecondValue) {
        previousOperator = currentOperator;
        return;
    }
    firstValue = calculate(firstValue, previousOperator, parseFloat(screenValue));
    screenValue = firstValue;
    previousOperator = currentOperator;
    waitingForSecondValue = true;
    updateScreenDisplay();
}

function calculate(first, operator, second){
    if(operator === '+') return first + second;
    if(operator === '-') return first - second;
    if(operator === '/') return first / second;
    if(operator === '*') return first * second;
    // if(operator === '=') return first = second;

    return second;
}

// content ko screen pe display karne ke liye 

function updateScreenDisplay(){
    screen.textContent = screenValue;
}