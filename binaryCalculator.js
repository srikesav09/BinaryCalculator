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
let o1, o2;

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

add.onclick = () => {
    o1 = current;
    expr += "+";
    op = "+";
    current = "";
    r.innerHTML = expr;
};

sub.onclick = () => {
    o1 = current;
    expr += "-";
    op = "-";
    current = "";
    r.innerHTML = expr;
};

mul.onclick = () => {
    o1 = current;
    expr += "*";
    op = "*";
    current = "";
    r.innerHTML = expr;
};

div.onclick = () => {
    o1 = current;
    expr += "/";
    op = "/";
    current = "";
    r.innerHTML = expr;
};

clr.onclick = () => {
    expr = "";
    current = "";
    op = "";
    r.innerHTML = "";
};

eq.onclick = () => {

    
    let n1 = parseInt(o1, 2);
    let n2 = parseInt(current, 2);

    let resultDec;

    switch (op) {
        case '+': resultDec = n1 + n2; break;
        case '-': resultDec = n1 - n2; break;
        case '*': resultDec = n1 * n2; break;
        case '/': resultDec = Math.floor(n1 / n2); break;
    }

    let resultBin = resultDec.toString(2);

    r.innerHTML = resultBin;

    expr = resultBin;
    current = resultBin;
};
