//task1 

let shoppingList = []

function printShoppingList() {
    let print_str = 'назва   ||  кількість   ||  куплен';

    shoppingList.sort((a, b) => (a.bought === b.bought) ? 0 : a.bought ? -1 : 1);

    shoppingList.forEach(function (item) {
        print_str += `<br />${item.name}  ||  ${item.qwt}  ||  ${item.bought}`;

    });
    document.getElementById("print_list").innerHTML = print_str;
}

function addToShoppingList() {
    let product_name = document.getElementById("product_name").value.trim();
    let product_qwt = Number(document.getElementById("product_qwt").value.trim());

    if (product_name == '') {
        alert('Введіть валідну назву');
        return
    }

    if (Number.isNaN(product_qwt) || product_qwt < 1) {
        alert('Введіть валідну кількість');
        return
    }

    idx = -1;
    shoppingList.forEach(function (item) {
        if (item.name == product_name) {
            idx = shoppingList.indexOf(item);
        }
    });

    // there is a gap in requirements
    // for example we have already a product with quiantity 10 that was bought 
    // and we will increase number by task requirements instead of adding new item 
    // in current implementation we will not change 'bought' status, 
    // otherwise user could think that he need to buy 11 qwt instead of only 1.
    if (idx == -1) {
        shoppingList.push({
            name: product_name,
            qwt: product_qwt,
            bought: false,
        })
    }
    else {
        if (shoppingList[idx].bought) {
            alert('Цей продукт вже був куплений, кількість буде збільшена, але статус не зміниться.')
        }
        shoppingList[idx].qwt += product_qwt;
    }

    printShoppingList()
}

function buyProduct() {
    let product_name = document.getElementById("product_buy").value.trim();

    const names = shoppingList.map(element => element.name)

    if (product_name == '') {
        alert('Введіть валідну назву');
        return
    } else if (names.indexOf(product_name) == -1) {
        alert('Такого продукту нема в списку, додайте його спочатку');
        return
    }

    idx = names.indexOf(product_name);
    shoppingList[idx].bought = true;

    printShoppingList()
}

printShoppingList()

//task2
let receipt = [
    { name: "буряк", qwt: 1, price: 15 },
    { name: "капуста", qwt: 2, price: 20 },
    { name: "картопля", qwt: 2, price: 10.65 },
    { name: "томати", qwt: 1, price: 30 },
    { name: "томатна паста", qwt: 1, price: 45 },
    { name: "м'ясо", qwt: 1.5, price: 398 },
    { name: "цибуля", qwt: 0.5, price: 12 },
    { name: "морква", qwt: 0.5, price: 15 }
]

function printReceipt(rcpt) {
    let print_str = 'назва   -  кількість   -  ціна';

    print_str += rcpt.map(item => `<br />${item.name}  -  ${item.qwt}  -  ${item.price}`);

    document.getElementById("print_receipt").innerHTML = print_str;
}

function receiptSum(rcpt) {
    let sum = 0;

    rcpt.forEach(element => {
        sum += element.qwt * element.price;
    });
    document.getElementById("sum_receipt").innerHTML = sum;
}

// In next 2 functions requirements can be read as per item in the receipt i.e. qwt*price
// and as per price to 1 item. 
// I choosed to do qwt*price
function maxPrice(rcpt) {
    let idx = 0;
    let sums = [];

    rcpt.forEach(element => {
        sums.push(element.qwt * element.price);
    });

    // here I could and should use sums array, but next approach seems better for learning
    let max = Math.max.apply(Math, rcpt.map(function (item) { return item.price * item.qwt; }))
    idx = sums.indexOf(max);

    document.getElementById("max_receipt").innerHTML = `${rcpt[idx].name}, ${max}`;
}

function avgPrice(rcpt) {
    let sums = 0;

    rcpt.forEach(element => {
        sums += element.qwt * element.price;
    });

    document.getElementById("avg_receipt").innerHTML = (sums / rcpt.length).toFixed(2);
}


printReceipt(receipt);
receiptSum(receipt);
maxPrice(receipt);
avgPrice(receipt);

//task3
let css_styles = [
    { name: 'color', value: 'blue' },
    { name: 'font-size', value: '300%' },
    { name: 'text-align', value: 'right' },
    { name: 'text-decoration', value: 'underline' },
    { name: 'text-transform', value: 'capitalize' },
    { name: 'letter-spacing', value: '10px' }
]

function writeCssText(styles) {
    let text = document.getElementById("css_text").value;

    if (text == '') {
        alert('Введіть не пустий текст');
        return
    }

    let stylestToWrite = 'style="';

    styles.forEach(element => {
        stylestToWrite += `${element.name}:${element.value};`
    });

    stylestToWrite += '"';

    console.log(stylestToWrite);

    document.write(`<p ${stylestToWrite}>${text}</p>`);
}

//task4
let audiences = [
    { name: "KYIV", places: 20, faculty: 'IT' },
    { name: "DNIPRO", places: 19, faculty: 'IT' },
    { name: "KHARKIV", places: 15, faculty: 'IT' },
    { name: "LVIV", places: 12, faculty: 'IT' },
    { name: "POLTAVA", places: 15, faculty: 'ART' },
    { name: "ODESA", places: 18, faculty: 'ART' },
    { name: "LUTSK", places: 10, faculty: 'ART' },
    { name: "CHERNIVTSI", places: 10, faculty: 'ART' },
    { name: "DONETSK", places: 10, faculty: 'COOK' },
    { name: "MYKOLAIV", places: 14, faculty: 'COOK' },
    { name: "SEVASTOPOL", places: 20, faculty: 'COOK' },
    { name: "KHERSON", places: 10, faculty: 'COOK' }
]

function printAudience(auds, elementToPrint) {
    let print_str = 'назва   -  кількість місць   -  факультет';

    auds.forEach(function (item) {
        print_str += `<br />${item.name}  -  ${item.places}  -  ${item.faculty}`;
    });
    document.getElementById(elementToPrint).innerHTML = print_str;
}

function audiencesPerFaculty(auds) {
    let fac = document.getElementById("get_fac_audiences").value.trim();
    facs = [];

    auds.forEach(element => {
        facs.push(element.faculty);
    });

    if (fac == '') {
        alert('Введіть валідну назву');
        return
    } else if (facs.indexOf(fac) == -1) {
        alert('Такого факультета нема в списку');
        return
    }

    let print_str = 'назва   -  кількість місць   -  факультет';

    auds.forEach(function (item) {
        if (item.faculty == fac) {
            print_str += `<br />${item.name}  -  ${item.places}  -  ${item.faculty}`;
        }
    });

    document.getElementById("print_fac_audiences").innerHTML = print_str;
}

function printValidAudiences(auds, group) {
    validAuds = [];

    auds.forEach(element => {
        if (element.faculty == group.faculty && group.people <= element.places) {
            validAuds.push(element);
        }
    });

    let print_str = 'назва   -  кількість місць   -  факультет';

    validAuds.forEach(function (item) {
        print_str += `<br />${item.name}  -  ${item.places}  -  ${item.faculty}`;
    });

    document.getElementById("print_valid_audiences").innerHTML = print_str;
}

function sortPlaces(auds) {
    auds.sort((a, b) => (a.places > b.places) ? -1 : 1);
    printAudience(auds, "print_sort_places");
}

function sortNames(auds) {
    auds.sort((a, b) => (a.name < b.name) ? -1 : 1);
    printAudience(auds, "print_sort_names");
}

printAudience(audiences, "print_audience");

let group = {
    name: 'IS-21',
    people: 13,
    faculty: 'IT'
}

document.getElementById("group").innerHTML = `${group.name}   ${group.people}   ${group.faculty}`;

printValidAudiences(audiences, group);