function abrirCarrinho() {
    document.querySelector("#carrinho").classList.add("right-[0rem]")
    document.querySelector("#carrinho").classList.remove("right-[-20rem]")
}

function fecharCarrinho() {
    document.querySelector("#carrinho").classList.remove("right-[0rem]")
    document.querySelector("#carrinho").classList.add("right-[-20rem]")
}

export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.querySelector("#fechar-carrinho")
    const botaoAbrirCarrinho = document.querySelector("#abrir-carrinho")

    botaoFecharCarrinho.addEventListener("click", fecharCarrinho)

    // addEventListener = alertou sobre uma ação em particular

    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho)
}
