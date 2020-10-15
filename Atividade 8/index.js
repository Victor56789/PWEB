var aluno1 = {
    RA: "212135123215",
    Nome: "Fulano Da Silva"
}

var aluno2 = new Object();

aluno2.RA = "215251251212"
aluno2.Nome = "Ciclano da Silva"

var aluno3 = {};
var RA = 'RA';
var Nome = 'Nome';

aluno3[RA] = '254568451235'
aluno3[Nome] = 'Vertrano da Silva'


alert(` Aluno 1 RA: ${aluno1.RA}\n Aluno 1 Nome: ${aluno1.Nome}\n Aluno 2 RA: ${aluno2.RA}\n Aluno 2 Nome: ${aluno2.Nome}\n Aluno 3 RA: ${aluno3.RA}\n Aluno 3 Nome: ${aluno3.Nome}\n`);

