let screen = document.getElementById("calculator-screen");
let screenValue = screen.textContent;

function inputDigit(digit){
    screenValue = screenValue === '0' ? digit : screenValue + digit;
    updateScreenDisplay();
};

function inputDecimal(){
    if(! screenValue.include('.')) {
        screenValue = screenValue + '.';
    }
    updateScreenDisplay();
};

function updateScreenDisplay(){
    screen.textContent = screenValue;
}