function checkNumberGreaterZero(value) {
    if (value == '' || value == 0 || Number.isNaN(value) || Number(value) <= 0) {
        alert("Невалідне число");
        return false;
    }
    return true;
}

function checkTextNotEmpty(str) {
    if (str == '') {
        alert("Невалідна строка");
        return false;
    }
    return true;
}

// task1
class Circle {
    constructor(radius) {
        this._r = radius;
    }

    get radius() {
        return this._r;
    }

    set radius(value) {
        console.log('setter works');
        if (checkNumberGreaterZero(value)) {
            this._r = value;
        }
    }

    get diameter() {
        return this._r * 2;
    }

    set diameter(value) {
        if (checkNumberGreaterZero(value)) {
            this._r = value / 2;
        }
    }

    area() {
        return Math.PI * this._r * this._r;
    }

    length() {
        return 2 * Math.PI * this._r;
    }
}

function printActualCircle() {
    document.getElementById("get_r").innerHTML = circle.radius;
    document.getElementById("get_d").innerHTML = circle.diameter;
    document.getElementById("area").innerHTML = circle.area();
    document.getElementById("length").innerHTML = circle.length();
}

function setRadiusWrapper(circleClass) {
    let new_r = Number(document.getElementById("new_radius").value);
    circleClass.radius = new_r;

    printActualCircle()
}

function setDiameterWrapper(circleClass) {
    let new_d = Number(document.getElementById("new_diameter").value);
    circleClass.diameter = new_d;

    printActualCircle()
}

let circle = new Circle(10);
document.getElementById("initial_r").innerHTML = circle.radius;

printActualCircle()

// task2
const MarkerUsedPerSymbol = 0.5;

class Marker {
    volume = 100;

    constructor(color) {
        this.color = color;
    }

    print(text) {
        if (!checkTextNotEmpty(text)) {
            return;
        }

        let textToPrint = String(text);
        let symbolsToPrint = textToPrint.replace(' ', '').length * MarkerUsedPerSymbol;

        if (symbolsToPrint <= this.volume) {
            this.volume -= symbolsToPrint;
        } else {
            let couldPrintText = '';
            for (let i = 0; i < this.volume + (textToPrint.split(' ').length - 1) * MarkerUsedPerSymbol; i++) {
                couldPrintText += textToPrint[i];
            }
            textToPrint = couldPrintText;
            this.volume = 0;
            alert(`${this.color} маркер скінчився!`)
        }
        return textToPrint;
    }
}

class FillMarker extends Marker {
    constructor(color) {
        super(color);
    }

    reFill() {
        this.volume = 100;
    }
}

function printText(marker, idGet, idPrint) {
    let text = document.getElementById(idGet).value;

    if (!checkTextNotEmpty(text)) return;

    let textField = document.getElementById(idPrint);
    textField.style.color = marker.color;
    textField.innerHTML = marker.print(text);

    console.log(`Debug info: marker ${marker.color} volume left:`, marker.volume);
}

let marker = new Marker('blue');
let fillMarker = new FillMarker('red');

// task3
class Employee {
    constructor(firstName, lastName, department, position) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
        this.position = position;
    }
}

class EmpTable {
    constructor(empArr) {
        this.array = empArr;
    }

    getHtml() {
        let table = document.createElement("TABLE");
        table.classList.add('EmpTable');
        document.body.appendChild(table);

        // print header
        let row = document.createElement('TR');
        row.classList.add('EmpTable__row', 'EmpTable__row--header');
        table.appendChild(row);

        for (let key in this.array[0]) {
            let column = document.createElement('TD');
            column.classList.add('EmpTable__column');
            let cell = document.createTextNode(key);
            column.appendChild(cell);
            row.appendChild(column);
        }

        // print body
        this.array.forEach(element => {
            row = document.createElement('TR');
            row.classList.add('EmpTable__row');
            table.appendChild(row);
            for (let key in this.array[0]) {
                let column = document.createElement('TD');
                column.classList.add('EmpTable__column');
                let cell = document.createTextNode(element[key]);
                column.appendChild(cell);
                row.appendChild(column);
            }
        });
    }
}

let employeesArray = [new Employee('Федор', 'Киврин', 'Отдел Линейного Счастья', 'заведующий'),
new Employee('Кристобаль', 'Хунта', 'Отдел Смысла Жизни', 'заведующий'),
new Employee('Морис-Иоганн-Лаврентий', 'Пупков-Задний', 'Отдел Абсолютного Знания', 'заведующий'),
new Employee('Мерлин', '', 'Отдел Предсказаний и Пророчеств', 'претендент на заведующего'),
new Employee('Жиан', 'Жиакомо', 'Отдел Универсальных Превращений', 'заведующий'),
new Employee('Саваоф', 'Один', 'Отдел Технического Обеспечения', 'заведующий'),
new Employee('Роман', 'Ойра-Ойра', 'Отдел Недоступных Проблем', 'сотрудник ')]

let table = new EmpTable(employeesArray);
table.getHtml();