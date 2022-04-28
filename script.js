
    var cpf = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

function loginAluno(){
    alert("Login do Aluno!")
    location.href="/login/loginAluno.html"
}

function loginDocentes(){
    alert("Login Docentes!")
    location.href="/login/loginDocentes.html"
}

function loginPais(){
    alert("Login dos Pais!")
    location.href="/login/loginPais.html"
}


function portalAluno(){

        if(cpf == "114" && senha == "123"){
        alert("portal do aluno!!")
        location.href="/principal/aluno/principalAluno"
         }else{
        alert("erro")
         }
        }

function portalDocentes(){
    if(cpf == "123" && senha == "123"){
        alert("portal do aluno!!")
        location.href="/principal/aluno/principalFinanceiro.html"
    }
    if(cpf == "456" && senha == "123"){
        alert("portal do professor!!")
        location.href="/principal/professor/principalProfessor.html"
    }if(cpf == "789" && senha == "123"){
        alert("portal do financeiro!!")
        location.href="/principal/secretaria/principalSecretaria.html"
    }
        
    }
