const input = require('readline-sync');
let par = 0, impar = 0;

for(let i = 0; i < 10; i++){
    const n = Number(input.question("Digite um numero :3 "));

    if(n % 2 === 0){
        par++;
    }
    else{
        impar++;
    }

}
