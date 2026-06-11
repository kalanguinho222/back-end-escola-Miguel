const alunos = [
    {id: 1, nome: "roberto", nota: 6.0},
    {id: 2, nome: "astoufo", nota: 9.0},
    {id: 3, nome: "antonio", nota: 4.5},
    {id: 4, nome: "lucas", nota: 8.5},
    {id: 5, nome: "provador de veneno", nota: 5.0}
];

const aprovacoes = alunos.map(a => {
    return {
        nome: a.nome,
        nota: a.nota,
        situacao: a.nota >= 6 ? "Aprovado" : "Reprovado"
    };
});

console.log(aprovacoes);