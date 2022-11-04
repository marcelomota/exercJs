function calculaNumeroDaSenha(senha) {
  let vetorSenhaDesbloqueada=[];
  let senhaDesbloqueada=0;
  let contador0 = 0;
  let contador1 = 0;
  for(let i=0;i<10;i++){
    for(let j=0; j<senha.length; j++){
      if(Number(senha[j].toString().charAt(i))==0){
        contador0++;
      }
      else 
        {
          contador1++;
        }
    }
    if(contador1>=contador0){
      vetorSenhaDesbloqueada.push(1);
    }
    else{
            vetorSenhaDesbloqueada.push(0);
    }
    contador0=0;
    contador1=0;
  }
  vetorSenhaDesbloqueada.reverse();
  for(let i=0; i<vetorSenhaDesbloqueada.length;i++){
    senhaDesbloqueada += vetorSenhaDesbloqueada[i]*(2**i);
  }
  return senhaDesbloqueada;
  
}