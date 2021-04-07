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

function makeFraction(numerator, denominator) {
    let fraction = {
        numerator: numerator,
        denominator: denominator,

        printFraction() {
            return `${this.numerator}/${this.denominator}`
        },

        clear() {
            let min;
            this.numerator < this.denominator ? min = this.numerator : min = this.denominator;

            for (let i = 2; i < min; i++) {
                if (this.numerator % i == 0 && this.denominator % i == 0) {
                    this.numerator = this.numerator / i;
                    this.denominator = this.denominator / i;
                }
            }

        },

        summ(fraction2) {
            new_den = this.denominator * fraction2.denominator;

            new_fr1_num = this.numerator * fraction2.denominator;

            new_fr2_num = this.denominator * fraction2.numerator;

            return makeFraction(new_fr1_num + new_fr2_num, new_den);
        },


    }

    return fraction;
}

function testFunctions() {
    let fr1 = makeFraction(Number(document.getElementById("fr1_num").value),
        Number(document.getElementById("fr1_den").value));
    let fr2 = makeFraction(Number(document.getElementById("fr2_num").value),
        Number(document.getElementById("fr2_den").value));

    summ_fr = fr1.summ(fr2);

    let summ_fr_cleared = Object.assign({}, summ_fr);
    summ_fr_cleared.clear();

    document.getElementById("fr_sum").innerHTML = `${fr1.printFraction()} + 
                                        ${fr2.printFraction()}=${summ_fr.printFraction()}=
                                        ${summ_fr_cleared.printFraction()}`;
}