// task2
const OPERATIONS = ['+', '-', '/', '*'];
let newRound = true;

let result = $(".calculator__result")[0];

$(".calculator__digit").on('click', function () {

    if (newRound === true) { result.innerText = ''; newRound = false };

    // this can be written with less code, but here readability is more important. 
    // if previous symbol was a number
    if (OPERATIONS.indexOf(result.innerText[result.innerText.length - 1]) == -1) {
        result.innerText += this.innerText;
    }
    else {
        // if previous symbol was an operation, but it's negative sign and there is one more operator before
        if (OPERATIONS.indexOf(result.innerText[result.innerText.length - 3]) > -1 &&
            result.innerText[result.innerText.length - 1] == '-') {
            result.innerText += this.innerText;
        } else
            // if it's first negative number
            if (result.innerText.length == 1) {
                result.innerText += this.innerText;

            }
            else {
                result.innerText += ' ' + this.innerText;
            }
    }
})

$(".calculator__operation").on('click', function () {
    if (newRound === true) { result.innerText = ''; newRound = false };

    result.innerText += ' ' + this.innerText;
})

$(".calculator__clear").on('click', function () {
    result.innerText = '';
})

$(".calculator__equal").on('click', function () {
    let input = result.innerText.split(' ');

    while (input.indexOf('*') != -1 || input.indexOf('/') != -1) {
        let idx = (input.indexOf('*') > 0) ? input.indexOf('*') : (input.indexOf('/') > 0) ? input.indexOf('/') : -1;
        input.splice(idx - 1, 3, doOperation(input[idx - 1], input[idx + 1], input[idx]));
    }

    let calc = input[0];
    for (let i = 1; i < input.length; i += 2) {
        calc = doOperation(calc, input[i + 1], input[i]);
    }

    result.innerText += ' = ' + calc;
    newRound = true;
})

function doOperation(a, b, operation) {
    a = +a;
    b = +b;
    if (!a || !b) { return 'unsupported operation' };

    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return 'unsupported operation';
    }
}