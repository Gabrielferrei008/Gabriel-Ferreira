document.addEventListener("DOMContentLoaded", function () {
    // Botão "Gostei"
    const gosteiButton = document.getElementById("gostei-button");
    const comemoracao = document.getElementById("comemoracao");
    gosteiButton.addEventListener("click", function () {
        
        const mensagemSemCultura = document.getElementById("mensagem-sem-cultura");
        mensagemSemCultura.style.display = "none";

        comemoracao.style.display = "block";
    });

    const naoGosteiButton = document.getElementById("nao-gostei-button");
    const mensagemSemCultura = document.getElementById("mensagem-sem-cultura");
    naoGosteiButton.addEventListener("click", function () {

        comemoracao.style.display = "none";

        mensagemSemCultura.style.display = "block";
    });
});