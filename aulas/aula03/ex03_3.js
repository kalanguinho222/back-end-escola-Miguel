const produtos = [

    { id: 1, nome:"agua desidratada", valor: 120},
    { id: 2, nome:"agua hidratada", valor: 25},
    { id: 3, nome:"monster branco", valor: 50},
    { id: 4, nome:"300 kg de batata doçe", valor: 170}
    
];


const produto = produtos.find(p => p.id === 3);

console.log(produto.nome);

const filtro = produtos.filter(p => p.valor > 50);

console.log(filtro);