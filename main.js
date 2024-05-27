

function add(a,b) {
    return a + b;
};


const test = document.querySelector(".buttons");
const display = document.querySelector(".display");

test.addEventListener("click", (e) => {
    let tester = document.createElement("div");
    tester.classList.add("tester")
    tester.textContent = "hola";
    display.appendChild(tester);
})