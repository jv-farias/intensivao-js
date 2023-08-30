// const nomeProduto = "Camisa Liverpool"
// const marca = "Zara"
// const preco = 70 
// const nomeArquivoImagem = "liverpool.webp"
// alert(`Opa, JavaScript aqui!`)
import { inicializarCarrinho } from "./src/menuCarrinho"

const catalogo = [{
    id: 1,
    nome: "Camisa Liverpool",
    marca: "Nike",
    preco: 120,
    nomeArquivoImagem: "liverpool.webp",
    feminino: false,
},
{
    id: 2,
    nome: "Camisa Barcelona",
    marca: "Nike",
    preco: 120,
    nomeArquivoImagem: "barcelona.webp",
    feminino: false,
},
{
    id: 3,
    nome: "Camisa PSG",
    marca: "Nike",
    preco: 120,
    nomeArquivoImagem: "psg.webp",
    feminino: false,
},
{
    id: 4,
    nome: "Camisa Inter de Milão",
    marca: "Nike",
    preco: 120,
    nomeArquivoImagem: "inter.webp",
    feminino: false,
},
{
    id: 5,
    nome: "Camisa Portugal Feminina",
    marca: "Nike",
    preco: 120,
    nomeArquivoImagem: "portugal-feminina.webp",
    feminino: true,
},
{
    id: 6,
    nome: "Camisa Brasil Feminina",
    marca: "Nike",
    preco: 120,
    nomeArquivoImagem: "brasil-feminina.webp",
    feminino: true,
},
{
    id: 7,
    nome: "Camisa França Feminina",
    marca: "Nike",
    preco: 120,
    nomeArquivoImagem: "franca-feminina.webp",
    feminino: true,
},
{
    id: 8,
    nome: "Camisa França Feminina",
    marca: "Nike",
    preco: 120,
    nomeArquivoImagem: "franca-feminina.webp",
    feminino: true,
}

]

for(const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class="border-solid border-2 border-sky-700 w-48 m-2" id="card-produto-${produtoCatalogo.id}">
    <img 
    src="./assets/${produtoCatalogo.nomeArquivoImagem}" 
    alt="${produtoCatalogo.nome}"
    style="height: 200px;">
    <p class="marca">${produtoCatalogo.marca}</p>
    <p id="nome">${produtoCatalogo.nome}</p>
    <p id="preco">R$ ${produtoCatalogo.preco}</p>
    <button id="btn-compra">Adicionar</button>
    </div>`
    
    document.querySelector("#container-produtos").innerHTML += cartaoProduto
}

inicializarCarrinho()