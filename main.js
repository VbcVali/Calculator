
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


const buttons = document.querySelector(".buttons");
const display = document.querySelector(".display");

let value = {
    currentValue: [],
    storedValue: [],
    operator: "",
};


buttons.addEventListener("click", (e) => {
    const clsName = e.target.className;
    let item = document.createElement("div");
    if (clsName === "clear") {
        display.innerHTML = "";
        value.currentValue = [];
        value.storedValue = [];
        value.operator = "";
    }
    else if (clsName === "number") {
        display.innerHTML = "";
        value.currentValue.push(e.target.textContent);
        item.textContent = value.currentValue.join("");
        display.appendChild(item);
    }
    else if (clsName == "operator") {
        display.innerHTML = "";
        value.operator = e.target.textContent;
        value.storedValue = value.currentValue;
        value.currentValue = [];
        item.textContent = value.operator;
        display.appendChild(item);
    }
    else if (clsName === "equal") {
        display.innerHTML = "";
        let result = operate(Number(value.storedValue.join("")), Number(value.currentValue.join("")), value.operator);
        item.textContent = result;
        display.appendChild(item);
    }
});
