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
        // No need to default since we are using select as input but nice to have a fallback 
        // in case function will be used with other element    
        default:
            symbol = "Введіть цифру від 0 до 9"; 
            break;      
        }

    document.getElementById("symbol").innerHTML = symbol;  
}

function checkNumber(){
    let number = Number(document.getElementById("number_3x").value);
    let result;

    if (Number.isNaN(number)){
        result = 'Будь ласка введіть число'
    }     
    // Double conversion to make sure wthat e have a number with 3 digits in
    else if (String(number).length != 3) {
        result = 'Будь ласка введіть число з 3х цифр'
    }
    else{
        digit1 = number % 10;
        digit2 = Math.floor(number / 10) % 10;
        digit3 = Math.floor(number / 100);
    
        if (digit1 == digit2 || digit1 == digit3){
            result = `Цифра ${digit1} повторюється`
        } else if (digit2 == digit3){
            result = `Цифра ${digit2} повторюється`
        }
        else{
            result = 'Цифрі в числі унікальні'
        }
    }

    document.getElementById("number_3x_result").innerHTML = result;  
}