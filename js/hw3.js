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