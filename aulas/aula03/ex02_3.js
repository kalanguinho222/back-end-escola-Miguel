const produtos = [

    { id: 1, nome: "agua desidratada", valor: 20},
    { id: 2, nome:"agua hidratada", valor: 5},
    { id: 3, nome:"monster branco", valor: 11},
    { id: 4, nome:"300 kg de batata doçe", valor: 100}
    
];

for(let i = 0; i < produtos.length; i++){

    console.log(`ID: ${produtos[i].id}\nProduto: ${produtos[i].nome}\nValor: ${produtos[i].valor}`)

}

produtos.push({ id: 5, nome: "Água com Gás", valor: 6 });

console.log("novo tamanho", produtos.length);