

//function add(a,b) {
//    return a + b;
//};
//
//function substract(a,b) {
//    return a - b;
//};
//
//function division(a,b) {
//    if (b === 0) {
//        return "Not today";
//    } else {
//        return (a / b).toFixed(3);
//    };
//};
//
//function multiply(a,b) {
//    return a * b;
//};

//Using switch to call a function or return each value
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

test.addEventListener("click", (e) => {
    if (e.target.textContent === "AC") {
        display.textContent = "";
    } else {
        let tester = document.createElement("div");
        tester.classList.add("tester");
        tester.textContent = e.target.textContent;
        display.appendChild(tester);
    }
    
});