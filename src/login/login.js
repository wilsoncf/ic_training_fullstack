
function forgetPassword(){
    document.getElementById("password").style.display="none";
    document.getElementById("joinbtn").style.display="none";
    document.getElementById("forget-password").style.display="none";
   
    document.getElementById("submitbtn").style.display="block";
    document.getElementById("email-reset").style.display="block";
}
function emailValidation(){
    const email = document.getElementById("email").value;
    const btnchecker = document.getElementById("btnchecker");
    const usuario = email.substring(0, email.indexOf("@"));
    const dominio = email.substring(email.indexOf("@")+1, email.length);

    if ((usuario.length >=1) &&
    (dominio.length >=3) &&
    (usuario.search("@")==-1) &&
    (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) &&
    (dominio.search(" ")==-1) &&
    (dominio.search(".")!=-1) &&
    (dominio.indexOf(".") >=1)&&
    (dominio.lastIndexOf(".") < dominio.length - 1)){
        btnchecker.style.display ="inline";
    }
    else{
        alert("Email Inválido");
        btnchecker.style.display = "none";

    }
}
function validation(){
    
    
    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;
    console.log(email);
    console.log(senha);
    if(senha == "" || email == ""){
        alert("Preencher todos os campos");
    }
    if(users.has(email)){
        if(users.get(email) == senha){
            location.href = "../home/home.html";
        }
        else{
            alert("Email ou senha inválidos");
        }    
    }
    else{
        alert("Email ou senha inválidos");
    }  
    
}
const users = new Map([
    ["wilson@gmail.com", "123wilson"],
    ["joao@gmail.com", "123joao"],
    ["pedro@gmail.com", "123pedro"],
    ["laura@gmail.com", "123laura"]
]);