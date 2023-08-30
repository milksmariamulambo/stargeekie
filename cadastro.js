const CampoNome = document.getElementById("inome");
   const CampoEmail = document.getElementById("imail");
   const CampoSenha = document.getElementById("isenha");
   const CampoCsenha = document.getElementById("icsenha");
   const formulario = document.querySelector("#cadastro");
   const mensagem = document.querySelector("#mensagem");


   formulario.onsubmit = (evento)=> {
    evento.preventDefault();
    
    if(CampoNome.value == ''){
        alert("Preencha o campo nome");
        CampoNome.focus();
        return null;
    }
    if(CampoEmail == ''){
        alert("Preencha o campo E-mail");
        CampoNome.focus();
        return null;
     }     
     if(CampoSenha.value == ''){
    alert("Preencha o campo senha");
    CampoNome.focus();
    return null;

     }
     if(CampoCsenha.value == ''){
        alert("Preencha o campo Confirma senha");
        CampoNome.focus();
        return null;
        }

        if(CampoCsenha.value != CampoCsenha.value){
            alert("Senhas não conferem");
            campoSenha.focus();
            return null;
        }
        
    let dados = JSON.parse(localStorage.getItem("dados")) || [];
    dados.push ({
        nome:  CampoNome.value,
        email: CampoEmail.value,
        senha: CampoSenha.value
    })

    localStorage.setItem("dados", JSON.stringify(dados));
    evento.preventDefault();
    mensagem.innerHTML="<P> Parabens Cadastro feito com sucesso</P>";
    setTimeout(()=> {window.location.assign("login.html")},2000)

   }
   

   