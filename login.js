const CampoEmail = document.getElementById("imail");
const CampoSenha = document.getElementById("isenha");
const formulario = document.querySelector("#flogin");
const msg = document.querySelector("#mensagem");


formulario.onsubmit =(evento) =>{
    evento.preventDefault();

    if(CampoEmail.value == ""){
        alert("Informar o e -mail");
        CampoEmail.focus();
        return null;
    }
    if(CampoSenha.value == ""){
        alert("Informar a senha");
        CampoSenha.focus();
        return null;
    }

    let dados =JSON.parse(localStorage.getItem("dados"));

    if (dados != null) {


            dados.forEach ((elemento) => {
                if (elemento.email == CampoEmail.value && elemento.senha == CampoSenha.value) {
                    let dados1 = JSON.parse(sessionStorage.getItem("logado"));
                    dados1= CampoEmail.value;
                    sessionStorage.setItem("logado" , dados1);
                    mensagem.innerHTML = "Aguarde redirecionando ..."
                    evento.preventDefault();
                    setTimeout(()=> {window.location.assign("catalogo.html")},2000)
                }
                else{
                    evento.preventDefault();
                    msg.innerHTML = "Usuario ou senha invalidos";
                }
            }
            )
    }
    else {
        evento.preventDefault();
        mensagem.innerHTML = "Nenhum usuário Cadastrado."
    }   
}
