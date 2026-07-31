```javascript
let display = document.getElementById('display');
let clearButton = document.getElementById('clear');
let deleteButton = document.getElementById('delete');
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let equalsButton = document.getElementById('equals');

let currentNumber = '';
let previousNumber = '';
let operator = '';

clearButton.addEventListener('click', () => {
    display.value = '';
    currentNumber = '';
    previousNumber = '';
    operator = '';
});

deleteButton.addEventListener('click', () => {
    currentNumber = currentNumber.slice(0, -1);
    display.value = currentNumber;
});

numbers.forEach(button => {
    button.addEventListener('click', () => {
        currentNumber += button.textContent;
        display.value = currentNumber;
    });
});

operators.forEach(button => {
    button.addEventListener('click', () => {
        previousNumber = currentNumber;
        operator = button.textContent;
        currentNumber = '';
        display.value = '';
    });
});

equalsButton.addEventListener('click', () => {
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
            result = '';
    }
    display.value = result;
    currentNumber = result.toString();
    previousNumber = '';
    operator = '';
});
```