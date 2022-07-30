/* Dev por Marcelo Mota
 Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;*/
const json = require('./dados.json');
let diaMenorValor = json[0];
let diaMaiorValor = json[0];
let fatTotal = 0;
let mediaFat;
let diasMaiorValor =0;
let qtdDiasFatValidos = json.length;

json.forEach((data)=>{   
    fatTotal+= data.valor;
    if(data.valor>diaMaiorValor.valor){
        diaMaiorValor = data;
    }
    if(data.valor<diaMenorValor.valor && data.valor!=0){
        diaMenorValor = data;
    }
    if(data.valor==0){
        qtdDiasFatValidos--;
    }
});
mediaFat = fatTotal/qtdDiasFatValidos;
json.forEach((data)=>{
    if(data.valor>mediaFat){
        diasMaiorValor++;
    }
 
});
console.log("Dia " + diaMaiorValor.dia + " teve o maior valor de faturamento com " + diaMaiorValor.valor);
console.log("Dia " + diaMenorValor.dia + " teve o menor valor de faturamento com  " + diaMenorValor.valor);
console.log("A media de faturamento foi de: "+mediaFat);
console.log("Houve "+diasMaiorValor+" dias que o faturamento foi maior que a media");