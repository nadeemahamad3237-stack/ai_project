```javascript
let display = document.getElementById('display');

let currentValue = '';
let previousValue = '';
let operator = '';

function addValue(val) {
    currentValue += val;
    display.value = currentValue;
}

function clearDisplay() {
    currentValue = '';
    previousValue = '';
    operator = '';
    display.value = '';
}

function deleteLastChar() {
    currentValue = currentValue.slice(0, -1);
    display.value = currentValue;
}

function calculate() {
    if (currentValue !== '' && operator !== '') {
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(previousValue) + parseFloat(currentValue);
                break;
            case '-':
                result = parseFloat(previousValue) - parseFloat(currentValue);
                break;
            case '*':
                result = parseFloat(previousValue) * parseFloat(currentValue);
                break;
            case '/':
                result = parseFloat(previousValue) / parseFloat(currentValue);
                break;
            case '%':
                result = (parseFloat(previousValue) / 100) * parseFloat(currentValue);
                break;
            default:
                return;
        }
        display.value = result;
        previousValue = result.toString();
        currentValue = '';
        operator = '';
    }
}

function setOperator(op) {
    if (currentValue !== '') {
        previousValue = currentValue;
        operator = op;
        currentValue = '';
    }
}

document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        setOperator(button.textContent);
    });
});
```