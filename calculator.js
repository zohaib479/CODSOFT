function add(x, y) {
    let result = parseFloat(x) + parseFloat(y);
    return result;
}

function subtract(x, y) {
    let result = parseFloat(x) - parseFloat(y);
    return result;
}

function multiply(x, y) {
    let result = parseFloat(x) * parseFloat(y);
    return result;
}

function divide(x, y) {
    if (parseFloat(y) === 0) {
        return "Error: Division by zero";
    }
    let result = parseFloat(x) / parseFloat(y);
    return result;
}

const buttons = document.querySelectorAll(".but");

let var1 = "";
let var2 = "";
let var3 = ""; 
let addition = false;
let multiplication = false;
let subtraction = false;
let division = false;

buttons.forEach(element => {
    element.addEventListener("click", function(event) {
        const key = event.target.textContent;

        document.querySelector(".display").textContent += key;

        if (element.classList.contains("clear")) {
            document.querySelector(".display").textContent = "";
            var1 = "";
            var2 = "";
            var3 = ""; 
            addition = false;
            multiplication = false;
            subtraction = false;
            division = false;
        }

        if (element.classList.contains("plus")) {
            var1 = document.querySelector(".display").textContent;
            document.querySelector(".display").textContent += "+";
            addition = true;
        }
    if(element.classList.contains("point"))
    {
        var1 = document.querySelector(".display").textContent;
            document.querySelector(".display").textContent += ".";
    }
        if (element.classList.contains("minus")) {
            var1 = document.querySelector(".display").textContent;
            document.querySelector(".display").textContent += "-";
            subtraction = true;
        }

        if (element.classList.contains("multiply")) {
            var1 = document.querySelector(".display").textContent;
            document.querySelector(".display").textContent += "x";
            multiplication = true;
        }

        if (element.classList.contains("divide")) {
            var1 = document.querySelector(".display").textContent;
            document.querySelector(".display").textContent += "/";
            division = true;
        }
    });
});

const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", function() {
  
    var3 = document.querySelector(".display").textContent.slice(var1.length + 1);

   
    if (addition) {
        document.querySelector(".display").textContent = add(var1, var3);
    } else if (subtraction) {
        document.querySelector(".display").textContent = subtract(var1, var3);
    } else if (multiplication) {
        document.querySelector(".display").textContent = multiply(var1, var3);
    } else if (division) {
        document.querySelector(".display").textContent = divide(var1, var3);
    }

    addition = false;
    subtraction = false;
    multiplication = false;
    division = false;
    var1 = "";
    var2 = "";
    var3 = ""; 
});
