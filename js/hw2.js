function checkInput(value) {
    text = 'Ця функція працює тільки з цілими позітивними числами, будь ласка введіть таке число.'
    if (isNaN(Number(value)) || Number(value) < 0 || Number(value % 1 != 0)) {
        confirm(text);
        return -1;
    } else {
        return Number(value);
    }
}

function checkInputNotString(value) {
    text = 'Ця функція працює тільки з числами, будь ласка введіть число.'
    if (isNaN(value)) {
        confirm(text);
        return -1;
    } else {
        return Number(value);
    }
}

function getSum() {
    let from = checkInput(document.getElementById('task1_from').value);
    let to = checkInput(document.getElementById('task1_to').value);

    if (from == -1 || to == -1) return;

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
    let num1 = checkInput(document.getElementById('task2_num1').value);
    let num2 = checkInput(document.getElementById('task2_num2').value);

    if (num1 == -1 || num2 == -1) return;

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
    let num = checkInput(document.getElementById('task3_num').value);

    if (num == -1) return
    else if (num == 0) document.getElementById("task3_result").innerHTML = 'У 0 нема дільників'
    else {
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
}

function getDigits() {
    let num = checkInput(document.getElementById('task4_num').value);

    if (num == -1) return;

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
        let num = checkInputNotString(prompt('Введіть число'));

        if (num == -1) return;

        (num > 0) ? pos++ : (num < 0) ? neg++ : zeros++;
        (num % 2 == 0) ? even++ : odd++;
    }

    document.getElementById("task5_result").innerHTML = `Коритувач ввів: 
    ${pos} позитивних, ${neg} негативних, ${zeros} нулів, ${even} парних, ${odd} не парних`;
}

function calc() {
    let result;

    do {
        let num1 = checkInputNotString(prompt('Введіть перше число'));
        let num2 = checkInputNotString(prompt('Введіть друге число'));

        if (num1 == -1 || num2 == -1) return;

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
                (num2 == 0) ? result = 'не можно ділити на 0' : result = num1 / num2;
                break;
            default:
                result = 'Ця операція не підтримується'
        }

    }
    while (confirm(`Результат: ${result}\nХочете порахувати щось ще?`));
}

function getShiftedNumber() {
    let number = checkInput(document.getElementById('task7_number').value);
    let shift = checkInput(document.getElementById('task7_shift').value);

    if (number == -1 || shift == -1) return;

    // in case shift bigger than actual length of the number
    shift = shift % String(number).length;

    let result = (number % 10 ** (String(number).length - shift)) * 10 ** shift + Math.floor(number / 10 ** (String(number).length - shift));

    document.getElementById("task7_result").innerHTML = result;
}

function days() {
    let i = 0;
    let day;
    do {
        switch (i) {
            case 0:
                day = "Неділя";
                break;
            case 1:
                day = "Понеділок";
                break;
            case 2:
                day = "Вівторок";
                break;
            case 3:
                day = "Середа";
                break;
            case 4:
                day = "Четвер";
                break;
            case 5:
                day = "П'ятниця";
                break;
            case 6:
                day = "Суббота";
                break;
        }
        (i == 6) ? i = 0 : i++;
    }
    while (confirm(`${day}\nХочете побачити наступний день?`));
}

function multTable() {
    for (let i = 2; i < 10; i++) {
        let result = '';
        for (let j = 1; j <= 10; j++) {
            result += `${i} * ${j} = ${i * j} || `;
        }
        document.getElementById(`task8_result${i}`).innerHTML = result;
    }
}

function guessNumber() {
    let from = 0;
    let to = 100;
    let game_end = false;

    let number;

    while (!game_end) {
        number = from + Math.floor((to - from) / 2);
        if (confirm(`Ваше число > ${number}?`)) {
            if (number < 100) {
                from = number + 1;
            }
        } else if (confirm(`Ваше число < ${number}?`)) {
            if (number > 0) {
                to = number - 1;
            }
        } else if (confirm(`Ваше число == ${number}?`)) {
            game_end = true
        }
        if (to == from) {
            game_end = true
            number = to;
            (confirm(`Ваше число == ${number}!`))
        }
    }

    document.getElementById("task10_result").innerHTML = `Ви загадали ${number}`;
}