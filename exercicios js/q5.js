/* Dev por Marcelo Mota
Escreva um programa que inverta os caracteres de um string.
IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/
//INSIRA AQUI A STRING DESEJADA
let string = "Resident Evil";
let array = string.split('');
string = "";
for(let i= array.length-1; i>=0;i--){
string += array[i];
}
console.log(string);