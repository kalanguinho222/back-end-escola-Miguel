const input = require('readline-sync');
let total = 0, media;

for (let i = 0; i < 5; i++) {
    const n= Number(input.question(" Digite a nota : ")); 
    total = total + n;
}

media = total / 5;

if(media >= 7){
    console.log("uwau ", media, ". com essa nota vc esta Aprovado ;3c");
}
else if(media >= 5){
    console.log("vixx: ", media, ". essa nota ai deve ser recuperada em :3");
}
else {
    console.log("serio? ", media, ". vai ter que repetir de ano para ver se aprende em viu, REPROVADO >:(");
}