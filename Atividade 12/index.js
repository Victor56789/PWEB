function validateEmail(){
    const form = document.getElementById("formulario")

    const email = form.email.value;

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
}

function submitForms() {
    const form = document.getElementById("formulario")
    const validation = validateEmail();

    if(form.email.value == "" || form.email.length < 8 || validation == false){
        alert("Por favor preencher o campo email, ou preencher corretamente com @")
        form.email.focus();
        return false;
    }
    if(form.nome.value == "" || form.nome.value.length < 10){
        alert("Por favor preencher o campo nome, ou preencher o numero minimo de 10 caracteres")
        form.nome.focus();
        return false;
    }
    if(form.comentario.value == "" || form.comentario.value.length < 20){
        alert("Por favor preencher o campo comentário, ou prenencher o numero minimo de 20 carecteres")
        form.comentario.focus();
        return false;
    }
    if(form.pesquisa.value == ""){
        alert("Por favor participe de nossa pesquisa!")
        form.comentario.focus();
        return false;
    }
    if(form.pesquisa.value == "sim"){
        alert("Volte sempre à esta página!")
    }else if(form.pesquisa.value == "nao"){
        alert("Que bom que você voltou a visitar essa página!")
    }
}

function limpar(){
    const form = document.getElementById("formulario")
    form.reset();
}