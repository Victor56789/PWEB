var nome = prompt("Digite o nome do aluno");

var nota1 = parseFloat(prompt("Digite a Nota 1"));
var nota2 = parseFloat(prompt("Digite a Nota 2"));
var nota3 = parseFloat(prompt("Digite a Nota 3"));

alert(nome + " média " + calculaMedia(nota1, nota2, nota3));

function calculaMedia(n1, n2, n3){
    return (n1 + n2 + n3) / 3;
}

