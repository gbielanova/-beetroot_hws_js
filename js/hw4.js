let Car;

function makeCar(producer, model, production_year, avg_speed) {
    let car = {
        producer: producer,
        model: model,
        production_year: production_year,
        avg_speed: avg_speed,

        printCar() {
            return `Авто має модель ${this.model}, було виготовлено ${this.producer} у ${this.production_year} та має середню швидкість ${this.avg_speed} км/год.`;
        },

        calcTime(dest) {
            let time = dest / this.avg_speed;
            let rest_times = Math.floor(time / 4);
            // Since driver need to rest for 1h we don't need to have any multipliers here
            time = time + rest_times;
            return time;
        },
    }

    return car;
}

function makeCarWrapper() {
    let producer = document.getElementById("producer").value;
    let model = document.getElementById("model").value;
    let production_year = Number(document.getElementById("production_year").value);
    let avg_speed = Number(document.getElementById("avg_speed").value);

    Car = makeCar(producer, model, production_year, avg_speed);

    document.getElementById("car").innerHTML = Car.printCar();
}

function getEstimate() {
    let dest = Number(document.getElementById("dest").value);
    document.getElementById("time").innerHTML = `Ви подолаєте цю відстань за ${Car.calcTime(dest)} годин`;
}
