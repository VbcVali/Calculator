
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
    item.textContent = e.target.textContent;
    display.appendChild(item);
    if (clsName === "number") {
        value.currentValue.push(e.target.textContent);
    }
    else if (clsName == "operator") {
        value.operator = e.target.textContent;
        value.storedValue = value.currentValue;
        value.currentValue = [];
    }
    else if (clsName === "equal") {
        console.log(value.storedValue.join)
       let result = operate(Number(value.storedValue.join("")), Number(value.currentValue.join("")), value.operator);
       console.log(result);
    
    }
});
