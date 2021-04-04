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

