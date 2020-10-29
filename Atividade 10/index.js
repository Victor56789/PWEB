function mudaLampada(tipo) {
    if (tipo == 1) {
        texto = "Saia com mouse para fechar ou clique para quebrar"
        arquivo = "janela_aberta.jpg"
    }
    if (tipo == 2) {
        texto = "Coloque o mouse por cima para abrir"
        arquivo = "janela_fechada.jpg"
    }
    if (tipo == 3) {
        texto = "A janela quebrou! saia com o mouse e tente novamente!"
        arquivo = "janela_quebrada.png"
    }
    document.getElementById("texto").innerHTML = texto;
    document.getElementById("imagem").src = arquivo
}