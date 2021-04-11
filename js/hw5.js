//task1 

let shoppingList = []

function printShoppingList() {
    let print_str = 'назва   ||  кількість   ||  куплен';
    shoppingList.forEach(function (item) {
        print_str += `<br />${item.name}  ||  ${item.qwt}  ||  ${item.bought}`;

    });
    document.getElementById("print_list").innerHTML = print_str;
}

function addToShoppingList() {
    let product_name = document.getElementById("product_name").value;
    let product_qwt = Number(document.getElementById("product_qwt").value);

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
        shoppingList[idx].qwt += product_qwt;
    }

    printShoppingList()
}

function buyProduct() {
    let product_name = document.getElementById("product_buy").value.trim();
    names = [];

    shoppingList.forEach(element => {
        names.push(element.name);
    });

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