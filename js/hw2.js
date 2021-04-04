function getSum() {
    let from = Number(document.getElementById('task1_from').value);
    let to = Number(document.getElementById('task1_to').value);

    let result = 0;

    if (from <= to) {
        for (let i = from; i <= to; i++) {
            result += i;
        }
    }
    else {
        for (let i = from; i >= to; i--) {
            result += i;
        }
    }

    document.getElementById("task1_result").innerHTML = result;
}

function getDivider() {
    let num1 = Number(document.getElementById('task2_num1').value);
    let num2 = Number(document.getElementById('task2_num2').value);

    let result = 0;

    (num2 > num1) ? result = num1 : result = num2;

    // we can add check that result > 0 but both numbers should be divided to 1
    // but it will not work if numbers will be float, hope for the best this time
    while (!(num2 % result == 0 && num1 % result == 0)) {
        result -= 1;
    }

    document.getElementById("task2_result").innerHTML = result;
}

function getDividers() {
    let num = Number(document.getElementById('task3_num').value);

    let result = '';
    let i = num;

    result += num;

    do {
        i--;
        if (num % i == 0) {
            result += ', ' + i;
        }
    } while (i > 0)

    document.getElementById("task3_result").innerHTML = result;
}

function getDigits() {
    let num = Number(document.getElementById('task4_num').value);
    let result = 1;

    while (num / 10 >= 1) {
        result++;
        num = num / 10;
    }

    document.getElementById("task4_result").innerHTML = result;
}

function getStats() {
    let pos = 0;
    let neg = 0;
    let zeros = 0;
    let odd = 0;
    let even = 0;

    for (let i = 0; i < 10; i++) {
        num = Number(prompt('Введіть число'));
        (num > 0) ? pos++ : (num < 0) ? neg++ : zeros++;
        (num % 2 == 0) ? even++ : odd++;
    }

    document.getElementById("task5_result").innerHTML = `Коритувач ввів: 
    ${pos} позитивних, ${neg} негативних, ${zeros} нулів, ${even} парних, ${odd} не парних`;
}

function calc() {
    let result;

    do {
        let num1 = Number(prompt('Введіть перше число'));
        let num2 = Number(prompt('Введіть друге число'));
        let sign = prompt('Введіть операцію (+, -, /, *)');
        switch (sign) {
            case ('+'):
                result = num1 + num2;
                break;
            case ('-'):
                result = num1 - num2;
                break;
            case ('*'):
                result = num1 * num2;
                break;
            case ('/'):
                result = num1 / num2;
                break;
            default:
                result = 'Ця операція не підтримується'
        }

    }
    while (confirm(`Результат: ${result}\nХочете порахувати щось ще?`));
}

function getShiftedNumber() {
    let number = Number(document.getElementById('task7_number').value);
    let shift = Number(document.getElementById('task7_shift').value);

    // in case shift bigger then actual length of the number
    shift = shift % String(number).length;

    let result = (number % 10 ** (String(number).length - shift)) * 10 ** shift + Math.floor(number / 10 ** (String(number).length - shift));

    document.getElementById("task7_result").innerHTML = result;
}