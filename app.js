```javascript
let currentNumber = '';
let previousNumber = '';
let operator = '';

function appendNumber(number) {
    currentNumber += number.toString();
    updateDisplay();
}

function appendOperator(op) {
    previousNumber = currentNumber;
    currentNumber = '';
    operator = op;
    updateDisplay();
}

function appendDecimal() {
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
        updateDisplay();
    }
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    updateDisplay();
}

function backspace() {
    currentNumber = currentNumber.slice(0, -1);
    updateDisplay();
}

function calculate() {
    if (previousNumber !== '' && currentNumber !== '') {
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(previousNumber) + parseFloat(currentNumber);
                break;
            case '-':
                result = parseFloat(previousNumber) - parseFloat(currentNumber);
                break;
            case '*':
                result = parseFloat(previousNumber) * parseFloat(currentNumber);
                break;
            case '/':
                result = parseFloat(previousNumber) / parseFloat(currentNumber);
                break;
            default:
                result = 0;
        }
        currentNumber = result.toString();
        previousNumber = '';
        operator = '';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = currentNumber;
}
```
This code creates a basic calculator application with a simple and intuitive interface. It supports basic arithmetic operations like addition, subtraction, multiplication, and division, as well as decimal numbers. The `app.js` file handles all the logic, and the `style.css` file provides a clean and responsive design. The `index.html` file defines the structure of the application.