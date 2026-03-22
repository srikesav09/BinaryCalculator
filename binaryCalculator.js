let r = document.getElementById('dis');

let btn0 = document.getElementById('z');
let btn1 = document.getElementById('o');
let add = document.getElementById('a');
let sub = document.getElementById('s');
let mul = document.getElementById('m');
let div = document.getElementById('d');
let clr = document.getElementById('c');
let eq = document.getElementById('e');

let expr = "";
let current = "";
let op = "";
let o1 = "";

btn0.onclick = () => {
    expr += "0";
    current += "0";
    r.innerHTML = expr;
};

btn1.onclick = () => {
    expr += "1";
    current += "1";
    r.innerHTML = expr;
};

function setOperator(operator) {
    if (current === "") return;
    o1 = current;
    op = operator;
    expr += operator;
    current = "";
    r.innerHTML = expr;
}

add.onclick = () => setOperator("+");
sub.onclick = () => setOperator("-");
mul.onclick = () => setOperator("*");
div.onclick = () => setOperator("/");


clr.onclick = () => {
    expr = "";
    current = "";
    op = "";
    o1 = "";
    r.innerHTML = "";
};

eq.onclick = () => {
    if (!o1 || !current) return;

    let n1 = parseInt(o1, 2);
    let n2 = parseInt(current, 2);

    if (op === '/' && n2 === 0) {
        r.innerHTML = "Error";
        return;
    }

    let result;

    switch (op) {
        case '+': result = n1 + n2; break;
        case '-': result = n1 - n2; break;
        case '*': result = n1 * n2; break;
        case '/': result = Math.floor(n1 / n2); break;
    }

    let bin = result.toString(2);

    r.innerHTML = bin;

    expr = bin;
    current = bin;
    op = "";
};

document.addEventListener("keydown", (e) => {

    if (e.key === "0") btn0.click();
    else if (e.key === "1") btn1.click();

    else if (e.key === "+") add.click();
    else if (e.key === "-") sub.click();
    else if (e.key === "*") mul.click();
    else if (e.key === "/") div.click();

    else if (e.key === "Enter" || e.key === "=") eq.click();

    else if (e.key === "Backspace" || e.key === "Escape") clr.click();
});
