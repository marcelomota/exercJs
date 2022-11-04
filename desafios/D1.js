function ultimaParada(combustivel,consumo,postosDeGasolina) {
  let distanciaMax = combustivel*consumo;
  let ultimaParada = -1;
  for(let i=0; i< postosDeGasolina.length; i++){
    console.log(postosDeGasolina[i]);
    if(distanciaMax>=postosDeGasolina[i]){
       let aux = postosDeGasolina[i];
            if(aux>ultimaParada){
              ultimaParada = aux;
            }
    }
  }
  return ultimaParada;
}