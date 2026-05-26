const input = require('readline-sync');
const n = Number(input.question("Digite qual a tabuada ;3c "));
for (let i = 1; i <= 10; i++){
    console.log(`${i} x ${n} = ${i * n}`);
}