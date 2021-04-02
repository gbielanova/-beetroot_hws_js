function checkStatus() {
    let age = Number(document.getElementById("age").value);
    let status;

    switch(true) {
        case (age <= 2):
            status = "Ви є дитина"; 
            break;
        case (12 <= age && age < 18):
            status = "Ви є підліток"; 
            break;
        case (18 <= age && age < 60):
            status = "Ви є дорослий"; 
            break;
        case (age >= 60):
            status = "Ви є пенсіонер"; 
            break;
        default:
            status = "Ви є неведома звірюшка (за умовами завдання)"; 
            break;      
        }

    document.getElementById("status").innerHTML = status;  
}

function getSymbol() {
    let number = Number(document.getElementById("number").value);
    let symbol;

    switch(number) {
        case 0:
            symbol = ")"; 
            break;
        case 1:
            symbol = "!"; 
            break;
        case 2:
            symbol = "@"; 
            break;
        case 3:
            symbol = "#"; 
            break;
        case 4:
            symbol = "$"; 
            break;
        case 5:
            symbol = "%"; 
            break;        
        case 6:
            symbol = "^"; 
            break;        
        case 7:
            symbol = "&"; 
            break;
        case 8:
            symbol = "*"; 
            break;        
        case 9:
            symbol = "("; 
            break;        
        default:
            symbol = "Введіть цифру від 0 до 9"; 
            break;      
        }

    document.getElementById("symbol").innerHTML = symbol;  
}