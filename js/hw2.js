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

