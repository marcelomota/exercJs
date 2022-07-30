/* Dev por Marcelo Mota
Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor 
sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
escreva um programa na linguagem que desejar onde, informado um número, 
ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se 
o número informado pertence ou não a sequência.
*/
function fibo(n){
if(n<2){
return 1;
}
else {
    return fibo(n-1)+ fibo(n-2);
}
}
//INFORME O VALOR EM VAL
var val = 13;
var n = 0;
 if(!Number.isInteger(val) || isNaN(val)){
    console.log("Ei informe um valor inteiro!");
 } else{
    while(true){
        if(val==fibo(n)){
            console.log("o numero "+ val.toString() +" pertence a sequência de fibonacci");
            break;
        }
        else if(val<fibo(n)){
            console.log("O numero "+val.toString()+ "não pertence a sequência de fibonacci");
            break;
        }
        n++; 
    }
 }
