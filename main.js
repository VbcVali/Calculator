

function add(a,b) {
    return a + b;
};

function substract(a,b) {
    return a - b;
};

function division(a,b) {
    if (b === 0) {
        return "Not today";
    } else {
        return (a / b).toFixed(3);
    };
};

function multiply(a,b) {
    return a * b;
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