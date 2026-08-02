```javascript
// Get the elements
const resultInput = document.getElementById('result');
const clearButton = document.getElementById('clear');
const backspaceButton = document.getElementById('backspace');
const divideButton = document.getElementById('divide');
const multiplyButton = document.getElementById('multiply');
const subtractButton = document.getElementById('subtract');
const addButton = document.getElementById('add');
const equalButton = document.getElementById('equal');
const numberButtons = document.querySelectorAll('#zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine');
const decimalButton = document.getElementById('decimal');

// Initialize variables
let currentNumber = '';
let previousNumber = '';
let operation = '';

// Add event listeners to number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentNumber += button.textContent;
        resultInput.value = currentNumber;
    });
});

// Add event listener to decimal button
decimalButton.addEventListener('click', () => {
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
        resultInput.value = currentNumber;
    }
});

// Add event listeners to operation buttons
divideButton.addEventListener('click', () => {
    operation = 'divide';
    previousNumber = currentNumber;
    currentNumber = '';
    resultInput.value = '';
});

multiplyButton.addEventListener('click', () => {
    operation = 'multiply';
    previousNumber = currentNumber;
    currentNumber = '';
    resultInput.value = '';
});

subtractButton.addEventListener('click', () => {
    operation = 'subtract';
    previousNumber = currentNumber;
    currentNumber = '';
    resultInput.value = '';
});

addButton.addEventListener('click', () => {
    operation = 'add';
    previousNumber = currentNumber;
    currentNumber = '';
    resultInput.value = '';
});

// Add event listener to equal button
equalButton.addEventListener('click', () => {
    let result;
    switch (operation) {
        case 'divide':
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
            break;
        case 'multiply':
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case 'subtract':
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case 'add':
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        default:
            result = 0;
    }
    resultInput.value = result;
    currentNumber = result.toString();
    previousNumber = '';
    operation = '';
});

// Add event listener to clear button
clearButton.addEventListener('click', () => {
    currentNumber = '';
    previousNumber = '';
    operation = '';
    resultInput.value = '';
});

// Add event listener to backspace button
backspaceButton.addEventListener('click', () => {
    currentNumber = currentNumber.slice(0, -1);
    resultInput.value = currentNumber;
});
```