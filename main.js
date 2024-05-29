
function operate(a,b,operator) {
    switch(operator) {
        case("+"):
            return a + b;
        case("-"):
            return a - b;
        case("*"):
            return a * b;
        case("/"):
            if (b === 0) {
                return "Not today";
            } else {
                return (a / b).toFixed(3);
            }
    };
};


const test = document.querySelector(".buttons");
const display = document.querySelector(".display");

let arrayOfFirst = [];
let arrayOfSecond = [];
let arrayOfOperator = [];

// Maybe an object instead of arrays;


test.addEventListener("click", (e) => {
    if (e.target.textContent === "AC") {
        display.textContent = "";
        arrayOfFirst = [];
        arrayOfSecond = [];
        arrayOfOperator = [];
    }

    else if (arrayOfOperator.length === 0) {
        // To Do
        // Nest another check to see if arrayOfFirst lenght is 0;
        let value = e.target.classList;
        if (value.value === "operator") {
            console.log("This works");
            arrayOfOperator.push(e.target.textContent);
        }
        else {
            arrayOfFirst.push(Number(e.target.textContent));
        }
    }
    else if (arrayOfOperator.length === 1) {
        let value = e.target.classList;
        if (value.value === "operator") {
            //To do;
            console.log("//To Do")
        }
        else {
            arrayOfSecond.push(Number(e.target.textContent));
        }
    }
    else if (arrayOfOperator.length === 2) {
        console.log("Deal with second operator")
        // return first operation;
        // store second operator in a variable
        // start again with fresh variable.
    }
    
});


// When AC it's clicked, clear all. (display and variables)
// While operator lenght = 0, store numbers into first variable
// When operator lenght = 1, store numbers into second variable
// When operator lenght = 2, return the result of the first operation, and store the second operator to continue calculus.




// First, we store the numbers in the first value
// When an operator it's clicked, store operator and move to the second value
// Store the numbers in the second value
// If an operator it's clicked again {
    // Operate with the first two values and return the result
    // Store the result in the first variable 
    // Update the operator with the new one
    // Add the new numbers into the second value
//}