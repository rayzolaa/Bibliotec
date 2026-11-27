const email = document.getElementById("email");
const nome = document.getElementById("nome");
const senha = document.getElementById("senha");
const senha2 = document.getElementById("senha2");
const botaoEntrar = document.getElementById("Entrar");

botaoEntrar.addEventListener("click", function() {

    const nomeUsuario = nome.value.trim();
    const emailUsuario = email.value.trim();
    const senhaDigitada = senha.value;
    const confirmarSenha = senha2.value;

    if (
        nomeUsuario === "" ||
        emailUsuario === "" ||
        senhaDigitada === "" ||
        confirmarSenha === ""
    ) {
        alert("Estes campos são obrigatórios!");

    } else if (senhaDigitada !== confirmarSenha) {

        alert("As senhas não são iguais!");

    } else {

        alert("Cadastro realizado com sucesso!");

        window.location.href = "../bibliotec/index.html";
    }

});