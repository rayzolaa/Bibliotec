
// ATUALIZAR TOTAL
function atualizarTotal() {

    const itens = document.querySelectorAll(".item-carrinho");

    let total = 0;

    itens.forEach(function(item) {

        const precoTexto = item.querySelector("div p:last-child").textContent;

        const preco = Number(
            precoTexto
                .replace("R$", "")
                .replace(/\./g, "")
                .replace(",", ".")
                .trim()
        );

        total += preco;

    });

    document.getElementById("total-carrinho").textContent =
        "Total: " + total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
}


// REMOVER UM LIVRO
function removerLivro(botao) {

    const item = botao.closest(".item-carrinho");

    if (item) {
        item.remove();
        atualizarTotal();
    }

    verificarCarrinho();
}


// LIMPAR TODOS OS LIVROS
function limparCarrinho() {

    const container = document.getElementById("itens-carrinho");

    container.innerHTML = "";

    atualizarTotal();

    verificarCarrinho();
}


// VERIFICAR SE ESTÁ VAZIO
function verificarCarrinho() {

    const container = document.getElementById("itens-carrinho");

    if (container && container.querySelectorAll(".item-carrinho").length === 0) {
        container.innerHTML = "<p>Seu carrinho está vazio.</p>";
    }

}


// EXECUTAR AO CARREGAR A PÁGINA
document.addEventListener("DOMContentLoaded", function() {
    atualizarTotal();
    verificarCarrinho();
});
