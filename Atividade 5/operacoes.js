var num1 = parseFloat(prompt("Digite a num 1"));
var num2 = parseFloat(prompt("Digite a num 2"));

alert("Soma " + calculaSoma(num1, num2));

alert("Subtracao " + subtracaoPriSeg(num1, num2));

alert("Produto " + calculaProduto(num1, num2));

alert("Divisao " + divPriSeg(num1, num2));

alert("Resto " + restoPriSeg(num1, num2));

function calculaSoma(n1, n2){
    return n1 + n2;
}

function subtracaoPriSeg(n1, n2){
    return n1 - n2;
}

function calculaProduto(n1, n2){
    return n1 * n2;
}

function divPriSeg(n1, n2){
    return n1 / n2;
}

function restoPriSeg(n1, n2){
    return n1 % n2;
}