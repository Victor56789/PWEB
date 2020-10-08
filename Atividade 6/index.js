function sortear(){
    var pc = Math.random()
    var escolha = ''
    if(pc <= 0.33){
        escolha = 'pedra'
    }else if(pc <= 0.66){
        escolha = 'tesoura'
    }else{
        escolha = 'papel'
    }
    return alert(escolha);
}


document.getElementById("btnPapel").addEventListener("click", ()=>{
    document.getElementById("computador").src="./papel.png"   
});

document.getElementById("jogar").addEventListener("click", ()=>{
    sortear();   
});


