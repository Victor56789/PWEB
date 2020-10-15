function maior(n1, n2, n3){
    var conjunto =[n1, n2, n3]
    conjunto.sort((a,b) =>
    b-a);
    return conjunto;
}

function compara(){
    num1 = document.getElementById('n1').value;
    num2 = document.getElementById('n2').value;
    num3 = document.getElementById('n3').value;
    resultado = maior(num1, num2, num3);
    alert(resultado);
}
