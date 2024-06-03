
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
        case("%"):
            return a % b;
    };
};


const buttons = document.querySelector(".buttons");
const display = document.querySelector(".display");

const negativePositive = document.querySelector(".negative").disabled = true;
const dot = document.querySelector("#dot");

let value = {
    currentValue: [],
    storedValue: [],
    operator: "",
};
let result;

buttons.addEventListener("click", (e) => {
    const clsName = e.target.className;
    let item = document.createElement("div");
    if (clsName === "clear") {
        display.innerHTML = "";
        value.currentValue = [];
        value.storedValue = [];
        value.operator = "";
        dot.disabled = false;
    }
    else if (clsName === "number") {
        display.innerHTML = "";
        value.currentValue.push(e.target.textContent);
        item.textContent = value.currentValue.join("");
        display.appendChild(item);
        if (value.currentValue.includes(".")) {
            dot.disabled = true;
        };
    }
    else if (clsName == "operator") {
        if (value.operator === "") {
            display.innerHTML = "";
            value.operator = e.target.textContent;
            value.storedValue = value.currentValue;
            value.currentValue = [];
            dot.disabled = false;
            item.textContent = value.operator;
            display.appendChild(item);
        }
        else {
            display.innerHTML = "";
            result = operate(Number(value.storedValue.join("")), Number(value.currentValue.join("")), value.operator);
            value.storedValue = [result];
            value.operator = e.target.textContent;
            value.currentValue = [];
            dot.disabled = false;
            item.textContent = result;
            display.appendChild(item);
        }
    }
    else if (clsName === "equal") {
        display.innerHTML = "";
        result = operate(Number(value.storedValue.join("")), Number(value.currentValue.join("")), value.operator);
        value.currentValue = [result];
        value.storedValue = [];
        item.textContent = result;
        display.appendChild(item);
    }
});
