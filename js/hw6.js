function checkNumberGreaterZero(value) {
    if (value == '' || value == 0 || Number.isNaN(value) || Number(value) <= 0) {
        alert("Невалідне число");
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


