var idade = [];
var sexo = [];
var opiniao = [];
var mediaIdades = 0;
var maisVelha = 0;
var maisNova = 50;
var qtddePessimo = 0;
var pctOtimoBom = 0;
var qtddeHomens = 0;
var qtddeMulheres = 0;

function sexoAleatorio()
{
    var sex = 'MFmf';
    var aleatorio = '';
    for (var i = 0; i < 1; i++) {
        var pos = Math.floor(Math.random() * sex.length);
        aleatorio += sex.substring(pos, pos + 1);
    }
    return aleatorio;
}

function opniaoAleatoria()
{
    var opn = ['Bom', 'Pessimo', 'Otimo', 'Razoavel'];
    var aleatorio = '';
    for (var i = 0; i < 1; i++) {
        var pos = Math.floor(Math.random() * (4 + 1));
        aleatorio += opn[pos];
    }
    return aleatorio;
}

function maisVelhaMaisNova(i){
    if(parseInt(idade[i]) > maisVelha){
        maisVelha = idade[i];
    }else if(parseInt(idade[i]) < maisNova){
        maisNova = idade[i];
    }
}

function qtddeAvPessimo(i){
    if(opiniao[i] == "Pessimo"){
        qtddePessimo += 1;
    }
}

function porcentoPessoasOb(i){
    if(opiniao[i] == "Otimo"){
        pctOtimoBom += 1;
    }else if(opiniao[i] == "Bom"){
        pctOtimoBom += 1;
    }
}

function qtddeHomensMulheres(i){
    if(sexo[i] == 'M' || sexo[i] == 'm'){
        qtddeHomens += 1;
    }else{
        qtddeMulheres += 1;
    }
}

function inserirOpniao(){
    opiniao.push(opniaoAleatoria());
}

function inserirSexo(){
    sexo.push(sexoAleatorio());
}

function limparVariaveis(){
    idade.length = 0;
    sexo.length = 0;
    opiniao.length = 0;
    mediaIdades = 0;
    maisVelha = 0;
    maisNova = 50;
    qtddePessimo = 0;
    pctOtimoBom = 0;
    qtddeHomens = 0;
    qtddeMulheres = 0;
}

function captarOpniao(){

    for(i = 0; i < 45; i++){
        idade.push(Math.floor(Math.random() * (60 + 1) + 10));
        inserirSexo();
        inserirOpniao();
        mediaIdades += parseInt(idade[i]);
        maisVelhaMaisNova(i);
        qtddeAvPessimo(i);
        porcentoPessoasOb(i);
        qtddeHomensMulheres(i);
    }

    pctOtimoBom = ((pctOtimoBom / 45) * 100).toFixed(2);
    mediaIdades = (mediaIdades / 45).toFixed(2);

    alert("\nmédia das idades: " + Math.round(mediaIdades) + "\nPessoa mais velha pesquisada: " + maisVelha + "\nPessoa mais nova: " + maisNova + "\nQuantidade de pessoas que responderam Péssimo: " + qtddePessimo + "\nPorcentagem Otimo Bom: " + pctOtimoBom + "% " + "\nQuantidade de Homens: " + qtddeHomens + "\nQuantidade de Mulheres" + qtddeMulheres);
}

document.getElementById("verificar").addEventListener("click", function(){
    captarOpniao();
    limparVariaveis();
});


