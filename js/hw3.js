function checkInputNotString(value) {
    text = 'Ця функція працює тільки з числами, будь ласка введіть число.'
    if (isNaN(Number(value))) {
        confirm(text);
        return NaN;
    } else {
        return Number(value);
    }
}

// Next functions are designed to do a single operation and do not validate incoming data
// so validation should be done on level of scripts that call this functions
// due to requirements that some fields can be empty 
// and execution that added to addEventListener it's impossible
// to validate most of the cases. 
// It's a bad design that was done not with validation in mind since it's a learning project

function task1(num1, num2) {
    return num1 < num2 ? -1 : num1 > num2 ? 1 : 0;
}

function task2(num) {
    if (num === 0)
        return 1;
    else {
        return num * task2(num - 1);
    }
}

function task3(num1, num2, num3) {
    return num1 * 100 + num2 * 10 + num3;
}

function task4(num1, num2 = num1) {
    return num1 * num2;
}

function task5(num) {
    let sum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            sum += i;
        }
    }

    return sum === num;
}

function task6(num1, num2) {
    let result = [];

    for (let i = num1; i <= num2; i++) {
        if (task5(i)) {
            result.push(i);
        }
    }

    return result;
}

function task7(hh = '00', min = '00', sec = '00') {
    (hh == '') ? hh = '00' : hh;
    (min == '') ? min = '00' : min;
    (sec == '') ? sec = '00' : sec;
    return `${hh}:${min}:${sec}`;
}

function task8(hh, min, sec) {
    return Number(hh) * 60 * 60 + Number(min) * 60 + Number(sec);
}

function task9(sec) {
    hh = Math.floor(sec / 3600);
    min = Math.floor(sec % 3600 / 60);
    sec = sec % 60;
    let hh_str;
    let min_str;
    let sec_str;
    (String(hh).length == 1) ? hh_str = `0${hh}` : hh_str = String(hh);
    (String(min).length == 1) ? min_str = `0${min}` : min_str = String(min);
    (String(sec).length == 1) ? sec_str = `0${sec}` : sec_str = String(sec);
    return `${hh_str}:${min_str}:${sec_str}`;
}

function task10(hh1, min1, sec1, hh2, min2, sec2) {
    date1 = task8(hh1, min1, sec1);
    date2 = task8(hh2, min2, sec2);
    return task9(date1 - date2);
}