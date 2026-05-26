const input = require('readline-sync');
const nome = input.question(" qual seu nome :3c ");
const idade = Number(input.question(" qual sua idade ;3 "));
const cidade = input.question(" onde vc mora? >:3 ");
console.log(`seu nome é ${nome}, vc tem ${idade} anos e é de${cidade}.`);