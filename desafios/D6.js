function checaNumeroEscondido(numero,numeroOculto) {
  let vetorNumero = numero.toString().split('');
  let vetorNumeroOculto = numeroOculto.toString().split('');
  let verificador="";
  let retorno;
  console.log(numero);
  console.log(numeroOculto);
  for(let i=0; i<vetorNumeroOculto.length; i++){
      for(let j=0; j<vetorNumero.length; j++){
          if(vetorNumero[j]==vetorNumeroOculto[i]){
              verificador += vetorNumeroOculto[i];
          }
          if(verificador==numeroOculto.toString()){
            retorno = true;
              break;
          }
          else {
            retorno = false;
          }
        
      }
  }
return retorno;
}